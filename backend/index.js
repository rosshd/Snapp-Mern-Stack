import express from "express";
import { PORT, mongoDBURL } from "./config.js";
import mongoose from "mongoose";
import ServiceRoute from './routes/ServiceRoute.js';
import cors from 'cors';
import compression from 'compression';
import path from 'path';
import { fileURLToPath } from 'url';
require('dotenv').config();
// Initialize the app
const app = express();

// Middleware setup
app.use(compression());
app.use(express.json());
app.use(cors({
    origin: process.env.FRONTEND_URL || 'http://localhost:5173', 
    optionsSuccessStatus: 200
}));

// Set up static file serving for uploads
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const uploadsPath = path.join(__dirname, 'uploads');
app.use('/uploads', express.static(uploadsPath));

// Routes
app.use('/myServices', ServiceRoute);

app.get('/', (req, res) => {
    res.send('Hello, World!');
});

// Database connection
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