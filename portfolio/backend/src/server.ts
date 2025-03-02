import express, { Request, Response, NextFunction } from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import aboutRoutes from './routes/aboutRoutes';
import serviceRoutes from './routes/serviceRoutes';
import { checkDatabaseConnection } from './config/db';
import porjectRoutes from './routes/projectRoutes';
import  mailRoutes from './routes/mailRoutes';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;
app.use(cors({
  origin: ['http://localhost:3001', '*'],
  methods: 'GET,POST,PUT,DELETE,OPTIONS',
  allowedHeaders: 'Content-Type, Authorization',
  credentials: true, 
}));

app.use(express.json());

app.options('*', cors());

app.use('/api/about', aboutRoutes);
app.use('/api/service', serviceRoutes);
app.use("/api/projects", porjectRoutes);
app.use('/api/mail', mailRoutes);

app.get('/', async (req: Request, res: Response) => {
  try {
    const isDbConnected = await checkDatabaseConnection();
    if (isDbConnected) {
      res.send('Server is running and database is connected!');
    } else {
      res.status(500).send('Server is running but failed to connect to the database.');
    }
  } catch (error) {
    console.error('Database connection check failed:', error);
    res.status(500).send('Internal server error');
  }
});



// Global Error Handler
app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  console.error('Server Error:', err.message);
  res.status(500).json({ error: err.message });
});

// Start Server
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
