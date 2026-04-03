# Google Sheets Integration for Contact Intake Form

## Overview
The contact form submits data to Google Sheets via Google Apps Script webhook. Here's how to set it up.

---

## Step 1: Create a Google Sheet

1. Go to [sheets.google.com](https://sheets.google.com)
2. Create a new spreadsheet
3. Name it: **"Brandon Weaver - Contact Intake"**
4. Create column headers in Row 1:
   - A1: `Timestamp`
   - B1: `First Name`
   - C1: `Last Name`
   - D1: `Email`
   - E1: `Industry`
   - F1: `Message`
   - G1: `Read`

5. **Copy the Sheet ID** from the URL:
   - URL format: `https://docs.google.com/spreadsheets/d/{SHEET_ID}/edit`
   - Copy the SHEET_ID (long alphanumeric string)

---

## Step 2: Create Google Apps Script

1. In the same spreadsheet, go to **Tools** → **Script Editor**
2. Delete any default code
3. Paste this code:

```javascript
// Column mapping
const SHEET_ID = 'YOUR_SHEET_ID_HERE'; // Replace with actual Sheet ID
const SHEET_NAME = 'Sheet1'; // Or whatever your sheet tab is named

function doPost(e) {
  try {
    // Parse request
    const data = JSON.parse(e.postData.contents);
    
    // Get sheet
    const ss = SpreadsheetApp.openById(SHEET_ID);
    const sheet = ss.getSheetByName(SHEET_NAME);
    
    // Append row
    sheet.appendRow([
      new Date(data.timestamp).toLocaleString('en-US', { timeZone: 'America/Los_Angeles' }),
      data.firstName,
      data.lastName,
      data.email,
      data.industry,
      data.message,
      'false'
    ]);
    
    return ContentService.createTextOutput('Success');
  } catch (error) {
    return ContentService.createTextOutput('Error: ' + error.toString());
  }
}
```

4. **Replace `YOUR_SHEET_ID_HERE`** with the Sheet ID you copied in Step 1
5. Click **Save**

---

## Step 3: Deploy as Web App

1. Click **Deploy** (top right)
2. Select **New Deployment**
3. Choose type: **Web app**
4. Configure:
   - Execute as: `Your email address`
   - Who has access: `Anyone`
5. Click **Deploy**
6. Click **Authorize access** (approve the app)
7. **Copy the deployment URL** - it will look like:
   ```
   https://script.google.com/macros/s/{DEPLOYMENT_ID}/usercopy
   ```

---

## Step 4: Update the Form

In `/src/components/ContactIntake.jsx`, find this line (around line 55):

```javascript
const response = await fetch(
  'https://script.google.com/macros/d/1YOUR_SCRIPT_ID_HERE/usercopy',
```

**Replace the URL** with the deployment URL you copied in Step 3:

```javascript
const response = await fetch(
  'https://script.google.com/macros/s/{YOUR_DEPLOYMENT_ID}/usercopy',
```

---

## Step 5: Test

1. Go to brandonmweaver.com
2. Scroll to **Let's Talk** section
3. Fill out the form and submit
4. Check your Google Sheet — the data should appear!

---

## Troubleshooting

**Form says "Failed to submit"?**
- Check the deployment URL is correct
- Check Google Apps Script authorization
- Open browser DevTools (F12) → Console to see error

**Data not appearing in Sheet?**
- Verify Sheet ID is correct in Apps Script
- Verify Sheet tab name matches in code (default: `Sheet1`)
- Check that column headers match what the script expects

**Need to update something?**
- Edit the Apps Script code
- Click **Deploy** → **New Deployment** (creates new version)
- Update the URL in ContactIntake.jsx
- Redeploy your website

---

## Optional: Email Notification

Want to be notified when someone submits?

Add this to the Apps Script (`doPost` function):

```javascript
MailApp.sendEmail(
  'brandon@navigatenow.com',
  'New Contact Request from ' + data.firstName + ' ' + data.lastName,
  'Email: ' + data.email + '\nIndustry: ' + data.industry + '\n\nMessage:\n' + data.message
);
```

---

## Done!

Your contact form is now live and collecting submissions to Google Sheets. 🎉
