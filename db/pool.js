import { Pool } from "pg";

export const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  // Enable SSL in production (Render/Neon), disable locally if needed
  ssl: process.env.NODE_ENV === 'production' ? { rejectUnauthorized: false } : false
});
