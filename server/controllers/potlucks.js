import mongoose from 'mongoose';
import PotluckBody from '../models/PotluckBody.js';



export const getPotlucks = async (req, res) => {
    try {
        const getPotluck = await PotluckBody.find();

        console.log(getPotluck);

        res.status(200).json(getPotluck);
    } catch (error) {
        res.status(404).json({message: error})
    }
}

export const createPotluck = async (req, res) => {
    const potluck = req.body;
    const newPotluck = new PotluckBody(potluck);

    try {
        await newPotluck.save();

        console.log("controler", potluck)

        res.status(201).json(newPotluck)
    } catch (error) {
        res.status(409).json({message: error})
    }
}

export const updatePotluck = async (req, res) => {
    const { id: _id } = req.params;
    const potluck = req.body;

    if(!mongoose.Types.ObjectId.isValid(_id)) return res.status(404).send('No potluck with that ID');
    
    const updatedPotluck = await PotluckBody.findByIdAndUpdate(_id, { ...potluck, _id}, { new: true })

    res.json(updatedPotluck);
}

export const deletePotluck = async (req, res) => {
    const { id } = req.params;

    if(!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send('No post with that ID');

    await PotluckBody.findByIdAndRemove(id);

    console.log('delete')

    res.json({message: 'post deleted successfully'});
}
