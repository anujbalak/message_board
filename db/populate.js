import pg from 'pg'
import 'dotenv/config'

const { Client } = pg;

const SQL = `
CREATE TABLE IF NOT EXISTS messages (
    id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
    message TEXT,
    name VARCHAR ( 255 ),
    added TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP NOT NULL
);

INSERT INTO messages (name, message, added)
VALUES
    ('Anuj', 'Wow this is first message', NOW()),
    ('Jack', 'Jack of all trades', NOW()),
    ('Travis', 'I got a head', NOW());
`;

async function  main() {
    console.log('seeding...')
    const client = new Client({
        connectionString: process.env.DATABASE_URL,
    })
    await client.connect()
    await client.query(SQL)
    await client.end()
    console.log('done')
}

main();