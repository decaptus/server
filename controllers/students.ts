import { Response, Request, Router } from 'express';
import mongoose from 'mongoose';

import {Personas, PersonaModel} from '../models/student';

const router = Router();

export const getStudents = async (req:Request, res:Response) => { 
    try {
        const questions:Personas[] = await PersonaModel.find();               
        res.status(200).json(questions);
        
    } catch (error:any) {
        res.status(404).json({ message: error.message });
    }
}

export const getStudent = async (req:Request, res:Response) => { 
    
    const { id } = req.params;

    try {
        const question = await PersonaModel.findById(id);
        
        res.status(200).json(question);
    } catch (error:any) {
        res.status(404).json({ message: error.message });
    }
}

export const createStudent = async (req:Request, res:Response) => {

    const newStudent:Personas = req.body;

    const newPostStudent = new PersonaModel(newStudent);

    try {
        await newPostStudent.save();

        res.status(201).json(newPostStudent );
    } catch (error:any) {
        res.status(409).json({ message: error.message });
    }
}

export const updateStudent = async (req:Request, res:Response) => {
    const { id } = req.params;
    const updatedStudent = req.body;
    
    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No question with id: ${id}`);

    await PersonaModel.findByIdAndUpdate(id, updatedStudent, { new: true });

    res.json(updatedStudent);
}

export const deleteStudent = async (req:Request, res:Response) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No question with id: ${id}`);

    await PersonaModel.findByIdAndRemove(id);

    res.json({ message: "Question deleted successfully." });
}


export default router;