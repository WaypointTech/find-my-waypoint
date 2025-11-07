import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { airtableService } from "@/lib/airtable";

const downloadFormSchema = z.object({
  name: z.string().optional(),
  email: z.string().email({ message: "Please enter a valid email address." }),
});

type DownloadFormValues = z.infer<typeof downloadFormSchema>;

interface OnePagerDialogProps {
  children?: React.ReactNode;
  asChild?: boolean;
  pdfPath?: string;
}

export const OnePagerDialog = ({ children, pdfPath = "/waypoint-onepager.pdf" }: OnePagerDialogProps) => {
  const [open, setOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const form = useForm<DownloadFormValues>({
    resolver: zodResolver(downloadFormSchema),
    defaultValues: { name: "", email: "" },
  });

  const onSubmit = async (data: DownloadFormValues) => {
    setIsSubmitting(true);
    try {
      await airtableService.createContentDownloadLead({
        name: data.name?.trim() || undefined,
        email: data.email,
        asset: "One-Pager",
        source: "Website",
      });

      toast({ title: "Download ready", description: "Your download will start now." });
      // Trigger file download
      const link = document.createElement("a");
      link.href = pdfPath;
      link.target = "_blank";
      link.rel = "noreferrer";
      document.body.appendChild(link);
      link.click();
      link.remove();

      form.reset();
      setOpen(false);
    } catch (error) {
      console.error("Failed to create download lead:", error);
      toast({
        title: "Download unavailable",
        description: error instanceof Error ? error.message : "Please try again later.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="sm:max-w-[520px]">
        <DialogHeader>
          <DialogTitle className="text-2xl">Download the one‑pager</DialogTitle>
          <DialogDescription>Enter your email to receive the PDF. Name is optional.</DialogDescription>
        </DialogHeader>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Name</FormLabel>
                  <FormControl>
                    <Input placeholder="Jane Doe" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email Address *</FormLabel>
                  <FormControl>
                    <Input type="email" placeholder="jane@example.com" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <div className="flex gap-4 pt-4">
              <Button type="button" variant="outline" onClick={() => setOpen(false)} className="flex-1" disabled={isSubmitting}>
                Cancel
              </Button>
              <Button type="submit" className="flex-1 bg-gradient-hero hover:shadow-glow transition-all" disabled={isSubmitting}>
                {isSubmitting ? "Preparing..." : "Get PDF"}
              </Button>
            </div>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
};






