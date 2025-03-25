import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { ClerkExpressRequireAuth } from '@clerk/clerk-sdk-node';
import userRoutes from './routes/user.routes';
import logger from './config/logger';

// Load environment variables
dotenv.config();

const app = express();
const port = process.env.PORT || 3001;

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.get('/', (req, res) => {
  res.json({ message: 'Welcome to SomaSmart API' });
});

// User routes
app.use('/api/users', userRoutes);

// Protected route example
app.get('/protected', ClerkExpressRequireAuth(), (req, res) => {
  res.json({ message: 'This is a protected route' });
});

// Error handling middleware
app.use((err: Error, req: express.Request, res: express.Response, next: express.NextFunction) => {
  logger.error(err.stack);
  res.status(500).json({ error: 'Something went wrong!' });
});

// Start server
app.listen(port, () => {
  logger.info(`Server is running on port ${port}`);
}); 