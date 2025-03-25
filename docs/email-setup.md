# Setting Up Free Email Functionality for Contact Form

This project uses FormSubmit to send emails from the contact form. FormSubmit is a completely free service with no monthly limits and no sign-up required!

## How FormSubmit Works

FormSubmit routes your form submissions directly to your email address without requiring any backend code, API keys, or accounts. 

## Setup Instructions

1. Open `src/components/contact/ContactForm.tsx`

2. Replace `YOUR_EMAIL_HERE` in the form action with your actual email address:
   ```jsx
   <form action="https://formsubmit.co/YOUR_EMAIL_HERE" method="POST" className="space-y-6" onSubmit={() => {
   ```

   For example:
   ```jsx
   <form action="https://formsubmit.co/info@netfluence.ca" method="POST" className="space-y-6" onSubmit={() => {
   ```

3. That's it! The form is now ready to send submissions to your email.

## How It Works

The first time someone submits your form, you'll receive an activation email from FormSubmit. Click the confirmation link in that email to start receiving form submissions.

## Form Configuration Options

The form already includes these configuration options:

- `_captcha=false` - Disables the captcha page (optional)
- `_next={window.location.href}` - Redirects users back to your page after submission
- `_subject` - Sets the email subject using the form's subject field
- `_honey` - Anti-spam honeypot field

## Additional Features

FormSubmit offers these additional features you can add:

### Custom Success/Thank You Page
```html
<input type="hidden" name="_next" value="https://yourdomain.com/thanks.html">
```

### Enable reCAPTCHA
```html
<input type="hidden" name="_captcha" value="true">
```

### Send form to Multiple Emails
```
your@email.com,another@email.com
```

### Auto-Response Email
```html
<input type="hidden" name="_autoresponse" value="Your custom autoresponse message">
```

### File Attachments
```html
<input type="file" name="attachment" accept="image/png, image/jpeg, application/pdf">
```

## Completely Free

FormSubmit is entirely free with no limits on monthly submissions. You don't need to create an account or pay for any subscription.

## More Information

For more details, visit [FormSubmit's website](https://formsubmit.co/). 