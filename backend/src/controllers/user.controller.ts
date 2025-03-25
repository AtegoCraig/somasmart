import { Request, Response } from 'express';
import { UserService } from '../services/user.service';
import logger from '../config/logger';

export class UserController {
  static async syncUser(req: Request, res: Response) {
    try {
      const { clerkId, email, name } = req.body;
      
      if (!clerkId || !email || !name) {
        return res.status(400).json({ error: 'Missing required fields' });
      }

      const user = await UserService.createOrUpdateUser(clerkId, email, name);
      res.json(user);
    } catch (error) {
      logger.error(`Error in syncUser: ${error}`);
      res.status(500).json({ error: 'Internal server error' });
    }
  }

  static async getProfile(req: Request, res: Response) {
    try {
      const clerkId = req.auth?.userId;
      
      if (!clerkId) {
        return res.status(401).json({ error: 'Unauthorized' });
      }

      const user = await UserService.getUserProfile(clerkId);
      
      if (!user) {
        return res.status(404).json({ error: 'User not found' });
      }

      res.json(user);
    } catch (error) {
      logger.error(`Error in getProfile: ${error}`);
      res.status(500).json({ error: 'Internal server error' });
    }
  }
} 