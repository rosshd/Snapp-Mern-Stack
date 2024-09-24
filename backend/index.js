import { PORT, mongoDBURL } from './config.js';
import { MongoClient, ServerApiVersion } from "mongodb";
import dotenv from 'dotenv';
import express from 'express';
import cors from 'cors';

const app = express();

dotenv.config();

const corsOptions = {
    origin: 'https://vercel.com/rosshds-projects/snapp-mern-stack/7SQjrYvgekmVJteqW7A4R2ngPorR',
    optionsSuccessStatus: 200
  };
  app.use(cors(corsOptions));

// Database connection
const client = new MongoClient(mongoDBURL, {
    serverApi: {
      version: ServerApiVersion.v1,
      strict: true,
      deprecationErrors: true,
    },
  });

const run = async () => {
    try{
        await client.connect();

        await client.db("admin").command({ ping: 1 });
        console.log(
        "Pinged your deployment. You successfully connected to MongoDB!"
        );
    }
    finally{

    }
}

run().catch(error => console.log)

app.get('/',(req,res)=>{
    res.send('Car Junction Backend Server Running...')
})

app.listen(PORT,()=>{
    console.log(console.log(`Server is running on port ${PORT}`))
})