import express, { response } from "express";
import { PORT , mongoDBURL } from "./config.js";
import mongoose from "mongoose";
import ServiceRoute from './routes/ServiceRoute.js';
import cors from 'cors';

const app = express();

//middleware for parsing request body
app.use(express.json());

//middleware for handling CORS POLICY
app.use(cors());

//app.use(
//    cors({
//        origin: 'http://localhost:3000',
//        methods: ['GET', 'POST', 'PUT', 'DELETE'],
//        allowedHeaders: ['Content-Type'],
//    })
//);


app.get('/', (req, res) => {
    console.log(req);
    return res.status(234).send('Hello World!');
});

app.use('/myServices', ServiceRoute);

//connects to mongoDB database
mongoose
    .connect(mongoDBURL)
    .then(() => {
        console.log('App is connected to database');
        app.listen(PORT, () => {
            console.log(`App is listening to port: ${PORT}`);
        });
    })
    .catch((error) => {
        console.log(error);
    })

