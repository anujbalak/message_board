import { messages } from "../data/messages.js";
import { pool } from "./pool.js";

async function getAllMessages() {
    const { rows } = await pool.query('SELECT * FROM messages;');
    return rows;
}

async function getMessage(id) {
    const { message } = pool.query('SELECT * FROM messages WHERE id = $1', [id])
    return message;
}

async function insertMessage(name, message) {
    await pool.query("INSERT INTO messages (message, name, added) VALUES ($1, $2, $3)", [message, name, new Date()]);
}

async function cleanMessages() {
    await pool.query('DELETE FROM messages;')
}

const populateMessages = () => {
    messages.forEach( async (message) => {
        await insertMessage(message.name, message.message, message.added)
    })
}

export { getAllMessages, getMessage, insertMessage}