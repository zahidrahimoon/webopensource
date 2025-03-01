import { Request, Response } from 'express';
import { sendEmail } from '../utils/sendEmail';

const sendMailController = async (req: Request, res: Response) => {
  const { email, subject, message, userEmail } = req.body;

  if (!email || !subject || !message || !userEmail) {
    return res.status(400).json({ message: 'All fields are required' });
  }

  try {
    await sendEmail({ email, subject, message, userEmail });
    res.status(200).json({ message: 'Email sent successfully' });
  } catch (error) {
    console.error('Error in sendMailController:', error);
    res.status(500).json({ message: 'Failed to send email' });
  }
};

export default sendMailController
