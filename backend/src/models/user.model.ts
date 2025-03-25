import { query } from '../config/database';

export interface User {
  id: string;
  clerk_id: string;
  email: string;
  name: string;
  created_at: Date;
  updated_at: Date;
}

export class UserModel {
  static async createUser(clerkId: string, email: string, name: string): Promise<User> {
    const result = await query(
      `INSERT INTO users (clerk_id, email, name)
       VALUES ($1, $2, $3)
       RETURNING *`,
      [clerkId, email, name]
    );
    return result.rows[0];
  }

  static async getUserByClerkId(clerkId: string): Promise<User | null> {
    const result = await query(
      'SELECT * FROM users WHERE clerk_id = $1',
      [clerkId]
    );
    return result.rows[0] || null;
  }

  static async updateUser(id: string, updates: Partial<User>): Promise<User> {
    const result = await query(
      `UPDATE users 
       SET email = COALESCE($1, email),
           name = COALESCE($2, name),
           updated_at = CURRENT_TIMESTAMP
       WHERE id = $3
       RETURNING *`,
      [updates.email, updates.name, id]
    );
    return result.rows[0];
  }
} 