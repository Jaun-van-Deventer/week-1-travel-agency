import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import { toNodeHandler } from 'better-auth/node';
import { auth } from './auth.js';
import toursRouter from './routes/tours.js';

const app = express();

app.use(cors({ origin: process.env.CLIENT_URL, credentials: true }));

app.all('/api/auth/*splat', toNodeHandler(auth));

app.use(express.json());

app.get('/api/health', (req, res) => res.json({ ok: true }));
app.use('/api/tours', toursRouter);

const port = process.env.PORT || 3001;
app.listen(port, () => console.log(`Server running on port ${port}`));