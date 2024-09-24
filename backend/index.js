import mongoose from "mongoose";
import { mongoDBURL } from "./config.js";
import dotenv from 'dotenv';

dotenv.config();

const corsOptions = {
    origin: 'https://vercel.com/rosshds-projects/snapp-mern-stack',
    optionsSuccessStatus: 200
  };
  app.use(cors(corsOptions));

// Database connection
mongoose.connect(mongoDBURL)
    .then(() => {
        console.log('App is connected to MongoDB');
    })
    .catch((error) => {
        console.error('Error connecting to MongoDB:', error);
        process.exit(1);
    });

// Serverless function example
export default async function handler(req, res) {
    if (req.method === 'GET') {
        res.status(200).json({ message: 'Hello, World!' });
    } else {
        res.status(405).json({ message: 'Method not allowed' });
    }
}