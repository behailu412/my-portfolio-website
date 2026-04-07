# EmailJS Setup Instructions

This contact form now uses EmailJS to send messages directly from your portfolio website without requiring users to open their email client. Follow these steps to configure it:

## 🚀 Quick Setup (5 minutes)

### 1. Create EmailJS Account
1. Go to [EmailJS.com](https://www.emailjs.com/)
2. Sign up for a free account
3. Verify your email address

### 2. Create Email Service
1. In your EmailJS dashboard, go to **Email Services**
2. Click **Add New Service**
3. Choose your email provider (Gmail, Outlook, etc.)
4. Connect your email account: `yifrubehailu412@gmail.com`
5. Give it a name (e.g., "gmail")
6. Click **Create Service**
7. Note your **Service ID** (it will look like `service_xxxxxx`)

### 3. Create Email Template
1. Go to **Email Templates** in your dashboard
2. Click **Create New Template**
3. Use these settings:

**Template Name:** `Portfolio Contact Form`

**Subject:** `{{from_name}} - {{subject}} (via {{portfolio_name}} Portfolio)`

**Email Content:**
```
Hello {{portfolio_name}},

You have received a new message from your portfolio contact form:

**From:** {{from_name}} ({{from_email}})
**Subject:** {{subject}}
**Date:** {{submitted_at}}

**Message:**
{{message}}

---
This message was sent from your portfolio website.
```

4. Click **Save Template**
5. Note your **Template ID** (it will look like `template_xxxxxx`)

### 4. Get Your Public Key
1. Go to **Account** → **API Keys**
2. Copy your **Public Key** (it starts with `B-` or `C-`)

### 5. Update Your Portfolio Configuration
Open `src/data/data.js` and update the EmailJS configuration:

```javascript
export const emailJSConfig = {
  serviceID: 'service_your_service_id',    // Replace with your Service ID
  templateID: 'template_your_template_id',  // Replace with your Template ID
  publicKey: 'YOUR_PUBLIC_KEY_HERE'         // Replace with your Public Key
};
```

### 6. Test Your Form
1. Start your development server: `npm run dev`
2. Go to the Contact section
3. Fill out the form and submit
4. Check if you receive the email at `yifrubehailu412@gmail.com`

## 🎯 Features You Now Have

✅ **Direct Email Sending** - No more redirects to email clients  
✅ **Professional Email Format** - Clean, structured emails  
✅ **Beautiful Success Messages** - User-friendly feedback  
✅ **Error Handling** - Clear error messages with setup help  
✅ **Form Validation** - Client-side validation for better UX  
✅ **Loading States** - Visual feedback during submission  
✅ **Auto-clear Form** - Form resets after successful submission  

## 🔧 Troubleshooting

### "EmailJS is not configured" Error
- Make sure you've updated all three values in `emailJSConfig`
- Check that your public key doesn't contain the placeholder text

### Email Not Sending
- Verify your EmailJS service is connected properly
- Check your template variables match the code
- Ensure your email account is verified in EmailJS

### Template Variables Not Working
Make sure your template uses these exact variable names:
- `{{from_name}}` - Sender's name
- `{{from_email}}` - Sender's email
- `{{subject}}` - Message subject
- `{{message}}` - Message content
- `{{to_email}}` - Your email (yifrubehailu412@gmail.com)
- `{{portfolio_name}}` - Your name (Behailu Yifru)
- `{{submitted_at}}` - Timestamp

## 📧 Email Template Tips

- **Professional Design:** The template creates clean, professional emails
- **All Information:** Includes sender details, timestamp, and the full message
- **Easy Replying:** Users can simply reply to the email to contact you
- **Portfolio Branding:** Shows the message came from your portfolio

## 🎨 Design Features

- **Gradient Success Messages:** Beautiful green gradients for success
- **Error Messages:** Clear red gradients with setup instructions
- **Loading States:** Spinner animation during submission
- **Hover Effects:** Interactive button and form field animations
- **Responsive Design:** Works perfectly on all devices

## 💡 Pro Tips

1. **Test Thoroughly:** Try different scenarios (valid/invalid emails, empty fields)
2. **Customize Template:** Modify the email template to match your style
3. **Monitor Usage:** Check your EmailJS dashboard for sending statistics
4. **Backup Configuration:** Save your EmailJS credentials securely

## 🆘 Need Help?

If you encounter any issues:
1. Check the browser console for error messages
2. Verify your EmailJS configuration
3. Ensure your template variables match exactly
4. Test with different email addresses

Your contact form is now ready to impress visitors with a professional, seamless experience! 🎉
