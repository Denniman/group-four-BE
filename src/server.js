import express from 'express';
import cors from 'cors';
import morgan from 'morgan';

import apiRoutes from './routes/index.js';

const app = express();

app.use(cors());
app.use(express.json());
app.use(morgan('dev'));
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.json({ message: 'server is ready' });
});

// routes
app.use('/', apiRoutes);
export default app;
