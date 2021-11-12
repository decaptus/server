/*
import express from 'express';
import mongoose from 'mongoose';

import User from '../models/user.js';

const router = express.Router();

export const Register = async (req, res) => {
    const { name, email, password, age, subjects } = req.body;
    const newUser = new User({ name, email, password, age, subjects })
    try {
        await newUser.save();
        res.status(201).json(newUser);
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}


export default router;



*/