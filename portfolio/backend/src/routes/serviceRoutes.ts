import { Router, RequestHandler } from 'express';
import { getServices } from '../controllers/serviceController';

const router = Router();

const getServicesHandler: RequestHandler = async (req, res) => {
  try {
    const services = await getServices();
    res.status(200).json(services);
  } catch (error) {
    console.error('Error fetching Services content:', error);
    res.status(500).json({ message: 'Error fetching Services content' });
  }
};

router.get('/', getServicesHandler);

export default router;


// // Route for retrieving a single service by id
// router.get('/services/:id', getService);

// // Route for creating a new service
// router.post('/services', createService);

// // Route for updating an existing service
// router.put('/services/:id', updateService);

// // Route for deleting a service
// router.delete('/services/:id', deleteService);

