import { pool } from "./pool.js";

export async function getAllMessages() {
  const { rows } = await pool.query("SELECT * FROM messages ORDER BY added");
  return rows;
}

export async function getDetailMessage(messageId) {
  const { rows } = await pool.query("SELECT * FROM messages WHERE id = $1", [messageId]);
  return rows[0];
}

export async function insertMessage(username, text) {
  await pool.query("INSERT INTO messages (username, text) VALUES ($1, $2)", [username, text]);
}
