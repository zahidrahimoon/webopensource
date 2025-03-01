import nodeMailer from 'nodemailer';
import { config } from 'dotenv';

config();

interface EmailOptions {
  email: string;
  subject: string;
  message: string;
  userEmail: string;
}

export const sendEmail = async (options: EmailOptions) => {
  try {
    const transporter = nodeMailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT) || 587,
      secure: false,
      auth: {
        user: process.env.SMTP_MAIL,
        pass: process.env.SMTP_PASSWORD,
      },
    });

    const mailOptions = {
      from: process.env.SMTP_MAIL,
      to: options.email,
      subject: options.subject,
      text: `${options.message} \n\nSender's Email: ${options.userEmail}`,
    };

    await transporter.sendMail(mailOptions);
    console.log('✅ Email sent successfully');
  } catch (error) {
    console.error('❌ Error sending email:', error);
    throw error;
  }
};
