import { UserModel, User } from '../models/user.model';
import logger from '../config/logger';

export class UserService {
  static async createOrUpdateUser(clerkId: string, email: string, name: string): Promise<User> {
    try {
      const existingUser = await UserModel.getUserByClerkId(clerkId);
      
      if (existingUser) {
        logger.info(`Updating existing user: ${clerkId}`);
        return await UserModel.updateUser(existingUser.id, { email, name });
      }

      logger.info(`Creating new user: ${clerkId}`);
      return await UserModel.createUser(clerkId, email, name);
    } catch (error) {
      logger.error(`Error in createOrUpdateUser: ${error}`);
      throw error;
    }
  }

  static async getUserProfile(clerkId: string): Promise<User | null> {
    try {
      return await UserModel.getUserByClerkId(clerkId);
    } catch (error) {
      logger.error(`Error in getUserProfile: ${error}`);
      throw error;
    }
  }
} 