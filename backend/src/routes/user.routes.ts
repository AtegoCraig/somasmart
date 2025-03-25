import { Router } from 'express';
import { UserController } from '../controllers/user.controller';
import { ClerkExpressRequireAuth } from '@clerk/clerk-sdk-node';

const router = Router();
const userController = new UserController();

// Public routes
router.post('/sync', userController.syncUser);

// Protected routes
router.get('/profile', ClerkExpressRequireAuth(), userController.getProfile);

export default router; 