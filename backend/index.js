import express from "express";
import { PORT, mongoDBURL } from "./config.js";
import mongoose from "mongoose";
import ServiceRoute from './routes/ServiceRoute.js';
import cors from 'cors';
import compression from 'compression';
import path from 'path';
import { fileURLToPath } from 'url';

app.use(compression());

const app = express();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(express.json());
app.use(compression());
app.use(cors({
    origin: 'http://localhost:5173',
    optionsSuccessStatus: 200
}));

const compression = require('compression');
const express = require('express');

const uploadsPath = path.join(__dirname, 'uploads');
app.use('/uploads', express.static(uploadsPath));

app.use('/myServices', ServiceRoute);

app.get('/', (req, res) => {
  res.send('Hello, World!');
});

mongoose.connect(mongoDBURL)
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