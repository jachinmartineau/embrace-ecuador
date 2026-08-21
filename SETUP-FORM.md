# Connecting the audit form to a Google Sheet (~5 minutes, one time)

The form at `/auditoria` and `/en/audit` posts submissions straight into a
Google Sheet through a small Google Apps Script. You do this once.

1. Create a new Google Sheet (sheets.new). Name it e.g. "Embrace Ecuador — Leads".
2. In that sheet: **Extensions → Apps Script**.
3. Delete whatever is in the editor, and paste the entire contents of
   `google-apps-script.gs` (in this project). Click the save icon.
4. Click **Deploy → New deployment**.
   - Click the gear next to "Select type" → choose **Web app**.
   - Description: anything (e.g. "Embrace form").
   - **Execute as:** Me.
   - **Who has access:** **Anyone**.  ← important, or the form can't reach it.
   - Click **Deploy**, authorize when prompted (it's your own script).
5. Copy the **Web app URL** it gives you (ends in `/exec`).
6. In this project open `src/config.js` and paste that URL between the quotes:
   `export const SHEET_ENDPOINT = 'https://script.google.com/.../exec';`
7. Commit / redeploy the site. Submissions now append as rows in your Sheet,
   and Google can email you on new rows (Sheet → Tools → Notification settings).

Until step 6 is done, the form shows a friendly "email us instead" message
rather than submitting — so it never silently loses a lead.

To also get an email on every submission, in the Sheet use
**Tools → Notification rules → Notify me when… a user submits a form / any changes are made**.
