import mongoose from 'mongoose';

const postSchema = mongoose.Schema({
    title: String,
    theme: String,
    host: String,
    essentials: [String]
});

const PotluckBody = mongoose.model('PotluckBody', postSchema)

export default PotluckBody;