import { Response, Request, Router } from 'express';
import mongoose from 'mongoose';
//asdf
import {QuestionI, QuestionModel} from '../models/questions';

const router = Router();

export const getQuestions = async (req:Request, res:Response) => { 
    try {
        const questions:QuestionI[] = await QuestionModel.find();               
        res.status(200).json(questions);
        
    } catch (error:any) {
        res.status(404).json({ message: error.message });
    }
}

export const getQuestion = async (req:Request, res:Response) => { 
    
    const { id } = req.params;

    try {
        const question = await QuestionModel.findById(id);
        
        res.status(200).json(question);
    } catch (error:any) {
        res.status(404).json({ message: error.message });
    }
}

export const createQuestion = async (req:Request, res:Response) => {

    const newQuestion:QuestionI = req.body;

    const newPostQuestion = new QuestionModel(newQuestion);

    try {
        await newPostQuestion.save();

        res.status(201).json(newPostQuestion );
    } catch (error:any) {
        res.status(409).json({ message: error.message });
    }
}

export const updateQuestion = async (req:Request, res:Response) => {
    const { id } = req.params;
    const updatedQuestion = req.body;
    
    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No question with id: ${id}`);

    await QuestionModel.findByIdAndUpdate(id, updatedQuestion, { new: true });

    res.json(updatedQuestion);
}

export const deleteQuestion = async (req:Request, res:Response) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No question with id: ${id}`);

    await QuestionModel.findByIdAndRemove(id);

    res.json({ message: "Question deleted successfully." });
}


export default router;