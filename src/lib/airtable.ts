interface AirtableRecord {
  fields: {
    "Organisation Name": string;
    "Contact Name": string;
    "Email Address": string;
    "Phone Number": string;
    "Festival/Event Name"?: string;
    "Expected Attendees"?: string;
    "Event Date"?: string;
    "Message": string;
    "Submission Date": string;
    "Status": string;
  };
}

interface AirtableResponse {
  id: string;
  fields: Record<string, any>;
  createdTime: string;
}

interface PartnerFormData {
  organisationName: string;
  contactName: string;
  email: string;
  phone: string;
  festivalName?: string;
  expectedAttendees?: string;
  eventDate?: string;
  message: string;
}

export class AirtableService {
  private apiKey: string;
  private baseId: string;
  private tableName: string;

  constructor() {
    this.apiKey = import.meta.env.VITE_AIRTABLE_API_KEY;
    this.baseId = import.meta.env.VITE_AIRTABLE_BASE_ID;
    this.tableName = import.meta.env.VITE_AIRTABLE_TABLE_NAME || "Partner Enquiries";

    if (!this.apiKey || !this.baseId) {
      console.warn("Airtable configuration missing. Please check your environment variables.");
    }
  }

  async createPartnerRequest(data: PartnerFormData): Promise<AirtableResponse> {
    if (!this.apiKey || !this.baseId) {
      throw new Error("Airtable configuration is missing. Please check your environment variables.");
    }

    const record: AirtableRecord = {
      fields: {
        "Organisation Name": data.organisationName,
        "Contact Name": data.contactName,
        "Email Address": data.email,
        "Phone Number": data.phone,
        "Message": data.message,
        "Submission Date": new Date().toISOString(),
        "Status": "New",
        ...(data.festivalName && { "Festival/Event Name": data.festivalName }),
        ...(data.expectedAttendees && { "Expected Attendees": data.expectedAttendees }),
        ...(data.eventDate && { "Event Date": data.eventDate }),
      },
    };

    const response = await fetch(
      `https://api.airtable.com/v0/${this.baseId}/${encodeURIComponent(this.tableName)}`,
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${this.apiKey}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(record),
      }
    );

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      throw new Error(
        `Failed to submit partner request: ${response.status} ${response.statusText}. ${
          errorData.error?.message || "Unknown error"
        }`
      );
    }

    return response.json();
  }

  // Test method to verify connection
  async testConnection(): Promise<boolean> {
    if (!this.apiKey || !this.baseId) {
      return false;
    }

    try {
      const response = await fetch(
        `https://api.airtable.com/v0/${this.baseId}/${encodeURIComponent(this.tableName)}?maxRecords=1`,
        {
          headers: {
            Authorization: `Bearer ${this.apiKey}`,
          },
        }
      );

      return response.ok;
    } catch {
      return false;
    }
  }
}

// Export a singleton instance
export const airtableService = new AirtableService();

