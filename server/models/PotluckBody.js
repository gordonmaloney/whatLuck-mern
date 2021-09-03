import mongoose from 'mongoose';

const postSchema = mongoose.Schema({
    potluckTitle: String,
    potluckTheme: String,
    potluckHost: String,
    essentials: [String],
    replies: [{
        bringer: String,
        bringing: [String]
    }]
});

const PotluckBody = mongoose.model('PotluckBody', postSchema)

export default PotluckBody;