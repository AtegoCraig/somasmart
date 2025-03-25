import fs from 'fs';
import path from 'path';
import { query } from '../config/database';
import logger from '../config/logger';

async function runMigrations() {
  try {
    // Read migration file
    const migrationPath = path.join(__dirname, '../migrations/001_create_users_table.sql');
    const migrationSQL = fs.readFileSync(migrationPath, 'utf8');

    // Execute migration
    await query(migrationSQL);
    logger.info('Database migration completed successfully');
  } catch (error) {
    logger.error(`Migration failed: ${error}`);
    process.exit(1);
  }
}

// Run migrations if this file is executed directly
if (require.main === module) {
  runMigrations();
} 