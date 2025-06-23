import { MailService } from '@sendgrid/mail';

if (!process.env.SENDGRID_API_KEY) {
  console.warn("SENDGRID_API_KEY environment variable not set - email functionality disabled");
}

const mailService = new MailService();
if (process.env.SENDGRID_API_KEY) {
  mailService.setApiKey(process.env.SENDGRID_API_KEY);
}

interface ContactEmailParams {
  name: string;
  email: string;
  phone?: string | null;
  service: string;
  message: string;
}

export async function sendContactEmail(params: ContactEmailParams): Promise<boolean> {
  if (!process.env.SENDGRID_API_KEY) {
    console.warn("SendGrid API key not configured - skipping email send");
    return false;
  }

  try {
    const emailContent = `
New Contact Inquiry - Canterbury Kiwi

Name: ${params.name}
Email: ${params.email}
Phone: ${params.phone || 'Not provided'}
Service Interested In: ${params.service}

Message:
${params.message}

---
This inquiry was submitted through the Canterbury Kiwi website contact form.
    `.trim();

    await mailService.send({
      to: 'canterburykiwi1@gmail.com',
      from: 'noreply@canterburykiwi.com', // This needs to be a verified sender in SendGrid
      subject: `New Inquiry from ${params.name} - ${params.service}`,
      text: emailContent,
      html: emailContent.replace(/\n/g, '<br>')
    });

    console.log('Contact email sent successfully');
    return true;
  } catch (error) {
    console.error('Failed to send contact email:', error);
    return false;
  }
}