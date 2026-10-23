import { pool } from './db.js';
import { readFile } from 'node:fs/promises';
import { tours } from './data/tours.js';

const schema = await readFile(new URL('./schema.sql', import.meta.url), 'utf8');
await pool.query(schema);

for (const t of tours) {
    await pool.query(
        `INSERT INTO tours (id, name, category, days, price, image, alt)
        VALUES ($1, $2, $3, $4, $5, $6, $7)
        ON CONFLICT (id) DO UPDATE SET
        name = EXCLUDED.name, category = EXCLUDED.category,
        days = EXCLUDED.days, price = EXCLUDED.price,
        image = EXCLUDED.image, alt = EXCLUDED.alt`,
        [t.id, t.name, t.category, t.days, t.price, t.image, t.alt]
    );
}

console.log(`Seeded ${tours.length} tours`);
await pool.end();