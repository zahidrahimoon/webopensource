import { prisma } from "../config/db";

export async function getServices() {
    try {
      const servicesContent = await prisma.service.findMany();
      return servicesContent;
    } catch (error: unknown) {
      console.error('Full error:', error);
      if (error instanceof Error) {
        throw new Error(`Error fetching services: ${error.message}`);
      }
      throw new Error('Error fetching services: Unknown error occurred');
    }
  }
  

// // GET /services/:id - Retrieve a single service by id
// export const getService = async (req: Request, res: Response): Promise<void> => {
//   try {
//     const { id } = req.params;
//     const service = await prisma.service.findUnique({ where: { id } });
//     if (!service) {
//       res.status(404).json({ error: 'Service not found.' });
//       return;
//     }
//     res.status(200).json(service);
//   } catch (error: unknown) {
//     console.error('Error fetching service:', error);
//     const message = error instanceof Error ? error.message : 'Unknown error';
//     res.status(500).json({ error: `An error occurred while fetching the service: ${message}` });
//   }
// };

// // POST /services - Create a new service
// export const createService = async (req: Request, res: Response): Promise<void> => {
//   try {
//     const { title, description, icon } = req.body;
//     const newService = await prisma.service.create({
//       data: { title, description, icon },
//     });
//     res.status(201).json(newService);
//   } catch (error: unknown) {
//     console.error('Error creating service:', error);
//     const message = error instanceof Error ? error.message : 'Unknown error';
//     res.status(500).json({ error: `An error occurred while creating the service: ${message}` });
//   }
// };

// // PUT /services/:id - Update an existing service
// export const updateService = async (req: Request, res: Response): Promise<void> => {
//   try {
//     const { id } = req.params;
//     const { title, description, icon } = req.body;
//     const updatedService = await prisma.service.update({
//       where: { id },
//       data: { title, description, icon },
//     });
//     res.status(200).json(updatedService);
//   } catch (error: unknown) {
//     console.error('Error updating service:', error);
//     const message = error instanceof Error ? error.message : 'Unknown error';
//     res.status(500).json({ error: `An error occurred while updating the service: ${message}` });
//   }
// };

// // DELETE /services/:id - Delete a service
// export const deleteService = async (req: Request, res: Response): Promise<void> => {
//   try {
//     const { id } = req.params;
//     const deletedService = await prisma.service.delete({ where: { id } });
//     res.status(200).json(deletedService);
//   } catch (error: unknown) {
//     console.error('Error deleting service:', error);
//     const message = error instanceof Error ? error.message : 'Unknown error';
//     res.status(500).json({ error: `An error occurred while deleting the service: ${message}` });
//   }
// };
