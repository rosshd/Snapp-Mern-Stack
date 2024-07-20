import express from "express";
import { PORT, mongoDBURL } from "./config.js";
import mongoose from "mongoose";
import ServiceRoute from './routes/ServiceRoute.js';
import cors from 'cors';
import compression from 'compression';

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(compression());
app.use(cors());
app.use('/myServices', ServiceRoute);
app.get('/', (req, res) => {
  res.send('Hello, World!');
});

mongoose.connect(mongoDBURL
)
.then(() => {
  console.log('App is connected to MongoDB');
  app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
  });
})
.catch((error) => {
  console.error('Error connecting to MongoDB:', error);
  process.exit(1);
});