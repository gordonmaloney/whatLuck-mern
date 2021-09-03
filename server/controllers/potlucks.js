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