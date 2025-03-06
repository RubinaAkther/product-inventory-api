import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import connectDB from './config/db.js';
import productRoutes from './routes/productRoutes.js';

dotenv.config();
connectDB();

const app = express();

app.use(cors());
app.use(express.json());

app.use((req, res, next) => {
  console.log(`Received Request: ${req.method} ${req.url}`);
  console.log(`Body:`, req.body);
  next();
});

app.use('/api', productRoutes);

app.get('/', (req, res) => {
  res.send('Welcome to Product Inventory API');
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
