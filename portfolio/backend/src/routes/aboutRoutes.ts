import { Router, RequestHandler } from 'express';
import { getAboutContent } from '../controllers/aboutController';

const router = Router();

const getAboutHandler: RequestHandler = async (req, res) => {
  try {
    
    const about = await getAboutContent();
    if (!about) {
      res.status(404).json({ message: 'About content not found' });
    } else {
      res.status(200).json(about);
    }
  } catch (error) {
    console.error('Error fetching About content:', error);
    res.status(500).json({ message: 'Error fetching About content' });
  }
};

router.get('/', getAboutHandler);

export default router;
