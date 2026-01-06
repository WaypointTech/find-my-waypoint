import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Index from "./pages/Index";
import FriendRequest from "./pages/FriendRequest";

const App = () => (
  <BrowserRouter>
    <TooltipProvider>
      <Toaster />
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/app/friend/:id" element={<FriendRequest />} />
      </Routes>
    </TooltipProvider>
  </BrowserRouter>
);

export default App;
