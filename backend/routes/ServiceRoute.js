import express from 'express';
import multer from 'multer';
import Service from '../snappServices.js';
import path from 'path';
import { fileURLToPath } from 'url';

const router = express.Router();

// Create __dirname for ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, path.join(__dirname, '..', 'uploads')); // Ensure correct path for uploads
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname);
    }
});

const upload = multer({ storage: storage });

router.post('/', upload.array('files', 3), async (req, res) => {
    try {
        const { Title, Description, Link } = req.body;
        const files = req.files;

        if (!files) {
            return res.status(400).json({ success: false, message: 'No files uploaded' });
        }

        const fileNames = files.map(file => file.filename);

        const newService = new Service({
            Title,
            Description,
            Link,
            File: fileNames
        });

        await newService.save();

        res.status(201).json({ success: true, message: 'Service created successfully' });
    } catch (error) {
        console.error('Error saving service:', error);
        res.status(500).json({ success: false, message: 'Failed to create service' });
    }
});

router.get('/', async (req, res) => {
    try {
        const services = await Service.find({});
        res.status(200).json({
            count: services.length,
            data: services
        });
    } catch (error) {
        console.error('Error fetching services:', error.message);
        res.status(500).json({ success: false, message: 'Failed to fetch services' });
    }
});

router.get('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const service = await Service.findById(id);
        return res.status(200).json(service);
    } catch (error) {
        console.log(error.message);
        res.status(500).send({ message: error.message });
    }
});

router.put('/:id', async (req, res) => {
    try {
        if (!req.body.Title || !req.body.Description || !req.body.file) {
            return res.status(400).send({
                message: 'Send all required fields: Title, author, publisher',
            });
        }
        const { id } = req.params;
        const result = await Service.findByIdAndUpdate(id, req.body);

        if (!result) {
            return res.status(404).json({ message: 'Service not found' });
        }

        return res.status(200).send({ message: 'Service successfully updated' });
    } catch (error) {
        console.log(error.message);
        res.status(500).send({ message: error.message });
    }
});

router.delete('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const result = await Service.findByIdAndDelete(id);

        if (!result) {
            return res.status(404).json({ message: 'Service not found' });
        }

        return res.status(200).send({ message: 'Service successfully deleted' });
    } catch (error) {
        console.log(error.message);
        res.status(500).send({ message: error.message });
    }
});

export default router;