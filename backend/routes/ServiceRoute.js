import express from 'express';
import { Service } from '../snappServices.js';

const router = express.Router();



router.post('/', async (req, res) => {
    try {
        if (
            !req.body.picture ||
            !req.body.description
        )   {
            return response.status(400).send({ 
                message: 'Send all required fields: picture, desription', 
            });       

        }
        const newService = {
            picture: req.body.picture,
            description: req.body.description,
        };

        const service = await Service.create(newService);

        return res.status(201).send(service);
    } catch(error) {
        console.log(error.message);
        res.status(500).send({ message: error.message });       
    }
})

//get all services offered
router.get('/', async (req, res) => {
    try {
        const services = await Service.find({});

        return res.status(200).json({
            count: services.length,
            data: services
        });
    } catch (error){
        console.log(error.message);
        res.status(500).send({ message: error.message });       
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
})

//update service
router.put('/:id', async (req, res) => {
    try{
        if (
            !req.body.picture ||
            !req.body.description
        )   {
            return res.status(400).send({ 
                message: 'Send all required fields: picture, author, publisher', 
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
})

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
})

export default router;