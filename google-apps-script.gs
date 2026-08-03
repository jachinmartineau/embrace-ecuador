// Embrace Ecuador — intake form -> Google Sheet
// Setup steps are in SETUP-FORM.md. Paste this into the Apps Script editor
// of the Google Sheet you want submissions to land in, then Deploy > Web app.

const HEADERS = [
  'Timestamp', 'Language', 'Audit', 'Name', 'Company', 'Email',
  'Sales channels', 'Monthly online sales', 'External agencies',
  'Monthly agency/tool spend', 'Message'
];

function doPost(e) {
  try {
    const data = JSON.parse(e.postData.contents);
    const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheets()[0];
    if (sheet.getLastRow() === 0) sheet.appendRow(HEADERS);
    sheet.appendRow([
      new Date(),
      data.locale || '',
      data.audit || '',
      data.name || '',
      data.company || '',
      data.email || '',
      data.channels || '',
      data.monthly_volume || '',
      data.num_agencies || '',
      data.monthly_spend || '',
      data.message || ''
    ]);
    return ContentService.createTextOutput(JSON.stringify({ ok: true }))
      .setMimeType(ContentService.MimeType.JSON);
  } catch (err) {
    return ContentService.createTextOutput(JSON.stringify({ ok: false, error: String(err) }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}
