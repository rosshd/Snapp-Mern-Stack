import dotenv from 'dotenv';
import express from 'express';
import cors from 'cors';
const app = express();

dotenv.config();

const corsOptions = {
    origin: '*',
    optionsSuccessStatus: 200
  };
app.use(cors(corsOptions));


const uploadsPath = path.join(__dirname, 'uploads');
app.use('/uploads', express.static(uploadsPath));

app.use('/myServices', ServiceRoute);
