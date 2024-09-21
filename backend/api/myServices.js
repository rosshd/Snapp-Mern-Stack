import { connectToDatabase } from '../../lib/mongodb'; // Adjust this path accordingly

export default async function handler(req, res) {
    const db = await connectToDatabase();
    
    // Your logic for handling the request
    if (req.method === 'GET') {
        // Fetch services from MongoDB
        const services = await db.collection('services').find({}).toArray();
        res.status(200).json(services);
    } else {
        res.status(405).json({ message: 'Method not allowed' });
    }
}