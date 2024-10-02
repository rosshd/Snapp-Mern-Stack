import mongoose from 'mongoose';

const serviceSchema = new mongoose.Schema({
  Title: String,
  Description: String,
  Link: String,
  File: [String],
});

const Service = mongoose.model('Service', serviceSchema);

export default Service;