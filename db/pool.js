import { Pool } from "pg";

export const pool = new Pool({
  connectionString: `postgresql://${process.env.USER}:${process.env.DATABASE_PASSWORD}@localhost:5432/messages`
});
