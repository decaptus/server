import { Response, Request, Router } from 'express';
import mongoose from 'mongoose';
import {TutoringI, TutoringModel} from '../models/tutoring';


const router = Router();

//creating CRUD methods


//GET all
export const getTutorings = async (req:Request, res:Response) => { 
    try {
        const tutorings: TutoringI[] = await TutoringModel.find();               
        res.status(200).json(tutorings);
        
    } catch (error:any) {                                                                       //he añadido any porq he visto q lo tiene como uknow y entonces da problemas

         res.status(404).json({message: error.message
        
        });
    }
}

//GET by ID

export const getTutoring = async (req:Request, res:Response) => {

    const id = req?.params?.id;
    
    
    
    try {
        const tutoring = await TutoringModel.findById(id); 
        console.log(tutoring);              
        res.status(200).json(tutoring);
        
    } catch (error:any) {                                                                       //he añadido any porq he visto q lo tiene como uknow y entonces da problemas

         res.status(404).json({message: error.message
        
        });
    }
}





//CREATE
export const createTutoring = async (req:Request, res:Response) => { 
    
        const newTutoring:TutoringI = req.body ;                                                //con esto aprovechamos el potencial de typescript
        const newPostTutoring = new TutoringModel(newTutoring);

    try{
        await newPostTutoring.save();
        res.status(201).json(newPostTutoring );

    } catch (error:any) {
        res.status(409).json({ message: error.message });
    }
    
}

//UPDATE
export const updateTutoring = async (req:Request, res:Response) => {

    
    const { id } = req.params;                                                 // o usar "const id = req?.params?.id;"  por ejemplo??
    const updatedTutoring = req.body;
    
    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No post with id: ${id}`);

    await TutoringModel.findByIdAndUpdate(id, updatedTutoring, { new: true });

    res.json(updatedTutoring);
}


//DELETE
export const deleteTutoring = async (req:Request, res:Response) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No post with id: ${id}`);

    await TutoringModel.findByIdAndRemove(id);

    res.json({ message: "Post deleted successfully." });
}

export default router;




