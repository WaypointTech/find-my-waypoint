interface AirtableRecord {
  fields: {
    "Organisation Name": string;
    "Contact Name": string;
    "Email Address": string;
    "Phone Number"?: string;
    "Festival/Event Name"?: string;
    "Expected Attendees"?: string;
    "Event Date"?: string;
    "Message": string;
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
  phone?: string;
  festivalName?: string;
  expectedAttendees?: string;
  eventDate?: string;
  message: string;
}

interface ContentDownloadData {
  name?: string;
  email: string;
  asset?: string; // e.g. "One-Pager"
  source?: string; // e.g. "Website"
}

export class AirtableService {
  private apiKey: string;
  private baseId: string;
  private tableName: string;
  private tableId?: string;
  private downloadsTableName: string;
  private downloadsTableId?: string;

  constructor() {
    this.apiKey = import.meta.env.VITE_AIRTABLE_API_KEY;
    this.baseId = import.meta.env.VITE_AIRTABLE_BASE_ID;
    this.tableName = import.meta.env.VITE_AIRTABLE_TABLE_NAME || "Partner Enquiries";
    this.tableId = import.meta.env.VITE_AIRTABLE_TABLE_ID;
    this.downloadsTableName = import.meta.env.VITE_AIRTABLE_DOWNLOADS_TABLE_NAME || "Content Downloads";
    this.downloadsTableId = import.meta.env.VITE_AIRTABLE_DOWNLOADS_TABLE_ID;

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
        "Message": data.message,
        "Status": "New",
        ...(data.festivalName && { "Festival/Event Name": data.festivalName }),
        ...(data.expectedAttendees && { "Expected Attendees": data.expectedAttendees }),
        ...(data.eventDate && { "Event Date": data.eventDate }),
        ...(data.phone && data.phone.trim() !== "" && { "Phone Number": data.phone }),
      },
    };

    const tableSegment = this.tableId ? this.tableId : encodeURIComponent(this.tableName);
    const response = await fetch(
      `https://api.airtable.com/v0/${this.baseId}/${tableSegment}`,
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

  async createContentDownloadLead(data: ContentDownloadData): Promise<AirtableResponse> {
    if (!this.apiKey || !this.baseId) {
      throw new Error("Airtable configuration is missing. Please check your environment variables.");
    }

    const record = {
      fields: {
        "Email Address": data.email,
        ...(data.name && data.name.trim() !== "" && { "Name": data.name }),
        "Asset": data.asset || "One-Pager",
        "Source": data.source || "Website",
        "Status": "New",
      },
    } as { fields: Record<string, any> };

    const tableSegment = this.downloadsTableId ? this.downloadsTableId : encodeURIComponent(this.downloadsTableName);
    const response = await fetch(
      `https://api.airtable.com/v0/${this.baseId}/${tableSegment}`,
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
        `Failed to create download lead: ${response.status} ${response.statusText}. ${
          (errorData as any).error?.message || "Unknown error"
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
      const tableSegment = this.tableId ? this.tableId : encodeURIComponent(this.tableName);
      const response = await fetch(
        `https://api.airtable.com/v0/${this.baseId}/${tableSegment}?maxRecords=1`,
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


