import 'dotenv/config';
import express from 'express';
import handler from './api/create-deal.js';

const app = express();
const PORT = process.env.PORT || 3001;

app.use('/api/create-deal', handler);

app.listen(PORT, () => {
  console.log(`API server running on http://localhost:${PORT}`);
});
