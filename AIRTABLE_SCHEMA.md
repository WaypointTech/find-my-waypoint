# Airtable Schema for Partner Requests

## Base Name
**Waypoint Partner Requests**

## Table Name
**Partner Enquiries**

---

## Fields Configuration

### 1. Record ID
- **Field Name**: `Record ID`
- **Field Type**: Autonumber
- **Description**: Auto-generated unique identifier for each submission

### 2. Organisation Name
- **Field Name**: `Organisation Name`
- **Field Type**: Single line text
- **Required**: Yes
- **Description**: Name of the festival or organisation

### 3. Contact Name
- **Field Name**: `Contact Name`
- **Field Type**: Single line text
- **Required**: Yes
- **Description**: Full name of the primary contact person

### 4. Email Address
- **Field Name**: `Email Address`
- **Field Type**: Email
- **Required**: Yes
- **Description**: Contact email address for follow-up

### 5. Phone Number
- **Field Name**: `Phone Number`
- **Field Type**: Phone number
- **Required**: Yes
- **Description**: Contact phone number

### 6. Festival/Event Name
- **Field Name**: `Festival/Event Name`
- **Field Type**: Single line text
- **Required**: No
- **Description**: Name of the specific festival or event

### 7. Expected Attendees
- **Field Name**: `Expected Attendees`
- **Field Type**: Single line text
- **Required**: No
- **Description**: Estimated number of attendees (e.g., "10,000")

### 8. Event Date
- **Field Name**: `Event Date`
- **Field Type**: Date
- **Required**: No
- **Description**: Date of the festival or event

### 9. Message
- **Field Name**: `Message`
- **Field Type**: Long text
- **Required**: Yes
- **Description**: Detailed message about partnership requirements

### 10. Submission Date
- **Field Name**: `Submission Date`
- **Field Type**: Date and time
- **Required**: Yes
- **Default**: Now
- **Description**: Timestamp of when the form was submitted

### 11. Status
- **Field Name**: `Status`
- **Field Type**: Single select
- **Required**: Yes
- **Default**: New
- **Options**:
  - New (Blue)
  - Contacted (Yellow)
  - In Discussion (Orange)
  - Proposal Sent (Purple)
  - Closed - Won (Green)
  - Closed - Lost (Red)
- **Description**: Current status of the partnership enquiry

### 12. Priority
- **Field Name**: `Priority`
- **Field Type**: Single select
- **Required**: No
- **Options**:
  - Low (Grey)
  - Medium (Yellow)
  - High (Orange)
  - Urgent (Red)
- **Description**: Priority level for follow-up

### 13. Assigned To
- **Field Name**: `Assigned To`
- **Field Type**: Single line text
- **Required**: No
- **Description**: Team member responsible for this enquiry

### 14. Notes
- **Field Name**: `Notes`
- **Field Type**: Long text
- **Required**: No
- **Description**: Internal notes about the enquiry and follow-up actions

### 15. Follow-up Date
- **Field Name**: `Follow-up Date`
- **Field Type**: Date
- **Required**: No
- **Description**: Scheduled date for next follow-up

---

## Views to Create

### 1. All Enquiries
- **Type**: Grid view
- **Filter**: None
- **Sort**: Submission Date (newest first)
- **Description**: Default view showing all partner enquiries

### 2. New Enquiries
- **Type**: Grid view
- **Filter**: Status = "New"
- **Sort**: Submission Date (newest first)
- **Description**: Shows only new, unprocessed enquiries

### 3. Active Discussions
- **Type**: Kanban view
- **Group by**: Status
- **Filter**: Status is not "Closed - Won" or "Closed - Lost"
- **Description**: Track active partnership discussions

### 4. High Priority
- **Type**: Grid view
- **Filter**: Priority = "High" or "Urgent"
- **Sort**: Priority (Urgent first), then Submission Date
- **Description**: Shows only high-priority enquiries

### 5. Calendar View
- **Type**: Calendar view
- **Date field**: Event Date
- **Filter**: Event Date is not empty
- **Description**: View enquiries by their event dates

---

## Automation Suggestions

### 1. New Enquiry Notification
- **Trigger**: When a record is created
- **Action**: Send email notification to partnerships team
- **Template**: Include Record ID, Organisation Name, and Message preview

### 2. Follow-up Reminder
- **Trigger**: When Follow-up Date arrives
- **Action**: Send Slack/email notification to Assigned To person

### 3. Status Update Notification
- **Trigger**: When Status changes to "Proposal Sent"
- **Action**: Send email to Contact Email with proposal details

---

## API Integration Notes

When integrating the partner form with Airtable:

1. **API Key**: Use Airtable Personal Access Token or OAuth
2. **Base ID**: Get from Airtable base URL
3. **Table Name**: "Partner Enquiries"
4. **Required Fields on Submit**:
   - Organisation Name
   - Contact Name
   - Email Address
   - Phone Number
   - Message
   - Submission Date (auto-generated)
   - Status (default to "New")

### Sample API Call Structure (JSON)
```json
{
  "fields": {
    "Organisation Name": "Example Festival Ltd",
    "Contact Name": "John Smith",
    "Email Address": "john@festival.com",
    "Phone Number": "+44 20 1234 5678",
    "Festival/Event Name": "Summer Sounds Festival",
    "Expected Attendees": "10,000",
    "Event Date": "2025-07-15",
    "Message": "We're interested in partnering for our summer festival...",
    "Submission Date": "2025-10-05T14:30:00.000Z",
    "Status": "New"
  }
}
```

---

## Form Field Mapping

| Web Form Field | Airtable Field |
|----------------|----------------|
| organisationName | Organisation Name |
| contactName | Contact Name |
| email | Email Address |
| phone | Phone Number |
| festivalName | Festival/Event Name |
| expectedAttendees | Expected Attendees |
| eventDate | Event Date |
| message | Message |
| (auto-generated) | Submission Date |
| (default: "New") | Status |

---

## Additional Recommendations

1. **Enable Form View**: Create an Airtable form view as a backup submission method
2. **Set Up Filters**: Create filters for different team members or regions
3. **Add Calculated Fields**: Consider adding fields like:
   - Days Since Submission (formula field)
   - Estimated Revenue (currency field)
   - Device Count Estimate (number field)
4. **Link Tables**: Create a separate "Organisations" table and link records if you have repeat customers
5. **Create Dashboard**: Use Airtable interfaces to create a dashboard for tracking conversion rates

---

## Data Validation Rules

- Email Address: Must be valid email format
- Phone Number: Must be valid phone number format
- Organisation Name: Minimum 2 characters
- Contact Name: Minimum 2 characters
- Message: Minimum 10 characters
- Event Date: Should not be in the past (optional validation)

---

This schema provides a comprehensive structure for managing partner requests in Airtable. You can share this with your Airtable agent to set up the database, or use it as a reference to create the base manually.

