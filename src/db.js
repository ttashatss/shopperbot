import pg from 'pg'
import dotenv from 'dotenv';

dotenv.config(); // Load environment variables from .env file

const pool = new pg.Pool({
  host: process.env.DB_HOST,
  user: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  port: process.env.DB_PORT,
//   ssl: false
  ssl: {
    rejectUnauthorized: false // Set to true for production or use a custom CA certificate
  }
});

export default pool;