import { PORT, mongoDBURL } from './config.js';
import { MongoClient, ServerApiVersion } from "mongodb";
import dotenv from 'dotenv';
import express from 'express';
import cors from 'cors';
<<<<<<< HEAD
import compression from 'compression';
import path from 'path';
import { fileURLToPath } from 'url';

=======
>>>>>>> 0d7f2d74d3b4b297c8567526270dba3f1a2c54e7

const app = express();

dotenv.config();

const corsOptions = {
    origin: '*',
    optionsSuccessStatus: 200
  };
  app.use(cors(corsOptions));

<<<<<<< HEAD

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
=======
// Database connection
const client = new MongoClient(mongoDBURL, {
    serverApi: {
      version: ServerApiVersion.v1,
      strict: true,
      deprecationErrors: true,
    },
>>>>>>> 0d7f2d74d3b4b297c8567526270dba3f1a2c54e7
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