#! /usr/bin/env node

import { Client } from "pg";

const SQL = `
CREATE TABLE messages (
   id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
   username VARCHAR ( 20 ) NOT NULL,
   text VARCHAR ( 200 ) NOT NULL,
   added TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP
);

INSERT INTO messages (username, text, added) 
VALUES 
  ('System', 'Welcome to the message board!', '2026-11-11 10:30:00+09'),
  ('Sally', 'Hi everyone!', '2026-11-11 11:11:11+09'),
  ('Moon', 'Hey Sally, how are you doing?', '2026-11-11 11:24:36+09'),
  ('Sierra', 'I rode my motorcycle to a hot spring today!', '2026-11-11 12:34:56+09'),
  ('Bob', 'I '' m hungry (T_T)', '2026-11-11 13:55:55+09');
`;

async function main() {
  console.log("seeding...");
  // Use the terminal argument if provided, otherwise fall back to .env
  const connectionString = process.argv[2] || process.env.DATABASE_URL;
  const client = new Client({
    connectionString,
    // Enable SSL when connecting to Neon (non-localhost)
    ssl: connectionString.includes("localhost") ? false : { rejectUnauthorized: false },
  });
  await client.connect();
  await client.query(SQL);
  await client.end();
  console.log("done");
}

main();
