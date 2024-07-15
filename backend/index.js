import express from "express";
import { PORT, mongoDBURL } from "./config.js";
import mongoose from "mongoose";
import ServiceRoute from './routes/ServiceRoute.js';
import cors from 'cors';
import morgan from 'morgan';
import multer from "multer";

const compression = require('compression');

const app = express();
const router = express.Router();

// Middleware for parsing request body
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(compression);
// Middleware for logging
app.use(morgan('dev'));

// Middleware for handling CORS POLICY
app.use(cors());

// Serve static files from 'public' directory
app.use('/public', express.static("public"));

// Multer configuration for file uploads
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/'); // Specify your upload directory
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname); // Use original filename
  }
});

const upload = multer({ storage: storage });

// Example route for file upload
router.post('/', upload.single('file'), async (req, res) => {
  try {
    if (!req.file) {
      console.log("No file received");
      return res.status(400).json({ success: false, message: "No file received" });
    }

    console.log('File received:', req.file);
    const filePath = `${req.protocol}://${req.get('host')}/${req.file.path}`;
    return res.status(200).json({ success: true, filePath: filePath });
  } catch (error) {
    console.error("Error handling file upload:", error);
    return res.status(500).json({ success: false, error: error.message });
  }
});

// Example route
app.get('/', (req, res) => {
  return res.status(200).send('Hello World!');
});

// Mounting service route
app.use('/myServices', ServiceRoute);

// Connect to MongoDB database
mongoose.connect(mongoDBURL, {
    useNewUrlParser: true,   // This option is no longer needed
    useUnifiedTopology: true // This option is no longer needed
  })
  .then(() => {
    console.log('App is connected to database');
    app.listen(PORT, () => {
      console.log(`App is listening to port: ${PORT}`);
    });
  })
  .catch((error) => {
    console.log('Error connecting to database:', error);
  });