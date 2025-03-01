import { Router, RequestHandler } from 'express';
import sendMailController from '../controllers/sendMailController';

const router = Router();

const sendMailHandler: RequestHandler = async (req, res) => {
  try {
    await sendMailController(req, res);
  } catch (error) {
    console.error('Error in mailRoutes:', error);
    res.status(500).json({ message: 'Failed to send email' });
  }
};

router.post('/send', sendMailHandler);

export default router; 
