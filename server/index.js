import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import toursRouter from './routes/tours.js';

const app = express();

app.use(cors({ origin: process.env.CLIENT_URL, credentials: true }));
app.use(express.json());

app.get('/api/health', (req, res) => res.json({ ok: true }));
app.use('/api/tours', toursRouter);

const port = process.env.PORT || 3001;
app.listen(port, () => console.log(`Server running on port ${port}`));