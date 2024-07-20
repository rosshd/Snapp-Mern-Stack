import express from 'express';
import multer from 'multer';
import Service from '../snappServices.js';

const router = express.Router();

const storage = multer.diskStorage({
    destination: function (req, File, cb) {
        cb(null, 'uploads/');
    },
    filename: function (req, File, cb) {
        cb(null, file.originalname);
    }
});

const upload = multer({ storage: storage });

router.post('/', upload.single('File'), async (req, res) => {
    try {
        const { Title, Description } = req.body;
        const Link = req.file ? `${req.protocol}://${req.get('host')}/${req.file.path}` : null;

        const newService = new Service({
            Title,
            Description,
            Link,
            File: req.File.filename
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


//get singular service
router.get('/:id', async (req, res) => {
    try {

        const { id } = req.params;

        const service = await Service.findById(id);

        return res.status(200).json(service);
    } catch (error){
        console.log(error.message);
        res.status(500).send({ message: error.message });       
    }
});

//update service
router.put('/:id', async (req, res) => {
    try{
        if (
            !req.body.Title ||
            !req.body.Description || 
            !req.body.File
        )   {
            return res.status(400).send({ 
                message: 'Send all required fields: Title, author, publisher', 
            });       
        }
        const { id } = req.params;

        const result = await Service.findByIdAndUpdate(id, req.body);
        
        if (!result) {
            return res.status(404).json({ message: 'Service not found' });
        }

        return res.status(200).send({ message: 'Service sucessfully updated' });
        
    } catch (error){
        console.log(error.message);
        res.status(500).send({ message: error.message });       
    }
});

//delete service
router.delete('/:id', async (req, res) => {
    try{
        const { id } = req.params;

        const result = await Service.findByIdAndDelete(id);
        
        if (!result) {
            return res.status(404).json({ message: 'Service not found' });
        }

        return res.status(200).send({ message: 'Service sucessfully deleted' });
        
    } catch (error){
        console.log(error.message);
        res.status(500).send({ message: error.message });       
    }
});

export default router