'use server'

import { google } from 'googleapis';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export async function appendToGoogleSheet(data: any) {
  try {
    const auth = new google.auth.JWT({
      email: process.env.GOOGLE_SHEETS_CLIENT_EMAIL,
      key: process.env.GOOGLE_SHEETS_PRIVATE_KEY,
      scopes: ['https://www.googleapis.com/auth/spreadsheets'],
    });

    const sheets = google.sheets({ version: 'v4', auth });

    const rowData = [
      new Date().toISOString(), // Timestamp
      data.name,
      data.email,
      // Add other data fields here
    ];

    const response = await sheets.spreadsheets.values.append({
      spreadsheetId: process.env.GOOGLE_SHEETS_SPREADSHEET_ID,
      range: process.env.GOOGLE_SHEETS_RANGE || 'Waitlist!A:C', // Default to first sheet
      valueInputOption: 'USER_ENTERED',
      requestBody: {
        values: [rowData],
      },
    });

    return response.data;
  } catch (error) {
    console.error('Error appending to Google Sheet:', error);
    return null; // Or throw an error if you prefer
  }
}