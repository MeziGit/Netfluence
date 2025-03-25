# Setting Up Google Forms for Contact Form

This guide explains how to set up a Google Form to work with your React contact form.

## Step 1: Create Your Google Form

1. Go to [forms.google.com](https://forms.google.com)
2. Sign in with your Google account
3. Click "+" to create a new form
4. Add these form fields to match your contact form:
   - Name (Short answer)
   - Email (Short answer)
   - Phone (Short answer)
   - Subject (Short answer)
   - Service Type (Multiple choice: Web Development, Mobile App, Custom Software, Other)
   - Budget (Multiple choice: $1,000-$5,000, $5,000-$10,000, $10,000-$25,000, $25,000+)
   - Message (Paragraph)

## Step 2: Configure Form Settings

1. Click the Settings gear icon ⚙️
2. Under the "General" tab:
   - Enable "Collect email addresses" if you want to verify respondents' emails
   - Uncheck "Limit to 1 response" if you want to allow multiple submissions from the same person
3. Under the "Responses" tab, click the three dots menu and select "Get email notifications for new responses"

## Step 3: Get Your Form URL

1. Click the "Send" button
2. Click the `<>` button to get the embed code
3. Copy the URL from the embed code (it looks like `https://docs.google.com/forms/d/e/YOUR_FORM_ID/viewform?embedded=true`)
4. Paste this URL into your React component as the `googleFormURL` variable

## Step 4: Find Entry IDs (For Direct Submission)

To find the entry IDs for each field if you want to use the direct submission method:

1. Open your Google Form in the browser
2. Right-click and select "View Page Source" (or press Ctrl+U)
3. Search (Ctrl+F) for "entry."
4. You'll find entry IDs that look like `entry.1234567890`
5. Map each entry ID to its corresponding field in your form

Example:
```js
const googleFormEntryIds = {
  name: "entry.123456789",  
  email: "entry.987654321",
  phone: "entry.456789123",
  // etc.
};
```

## Step 5: Test Your Form

1. Fill out your React form and submit it
2. Verify that the Google Form appears in the iframe
3. Check your Google Form's responses to ensure data is being captured
4. Make sure you're receiving email notifications for new submissions

## Additional Tips

1. **Customizing the Form Appearance**:
   - In the Google Form editor, click the "Customize Theme" button to match your website's colors

2. **Pre-filling the Form**:
   - If using the iframe method, you can add URL parameters to pre-fill form fields
   - Format: `?entry.ENTRY_ID=VALUE&entry.ANOTHER_ID=ANOTHER_VALUE`

3. **Redirecting After Submission**:
   - In your Google Form settings, under "Presentation", you can configure a custom confirmation message or redirect

4. **Handling Form Responses**:
   - You can connect Google Forms to Google Sheets to manage all submissions in a spreadsheet

## Troubleshooting

If the form isn't working:

1. Check that your Google Form URL is correct
2. Ensure the entry IDs match your form fields exactly
3. Make sure your Google Form is set to "Public" or "Anyone with the link"
4. If using direct submission, note that CORS issues may prevent it from working in all browsers 