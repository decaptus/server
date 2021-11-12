import { Response, Request, Router } from 'express';
import mongoose from 'mongoose';
import {VacunasI, VacunasModel} from '../models/tutoring';


const router = Router();

//creating CRUD methods


//GET all
export const getTutorings = async (req:Request, res:Response) => { 
    try {
        const tutorings: VacunasI[] = await VacunasModel.find();               
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
        const tutoring = await VacunasModel.findById(id); 
        console.log(tutoring);              
        res.status(200).json(tutoring);
        
    } catch (error:any) {                                                                       //he añadido any porq he visto q lo tiene como uknow y entonces da problemas

         res.status(404).json({message: error.message
        
        });
    }
}





//CREATE
export const createTutoring = async (req:Request, res:Response) => { 
    
        const newTutoring:VacunasI = req.body ;                                                //con esto aprovechamos el potencial de typescript
        const newPostTutoring = new VacunasModel(newTutoring);

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

    await VacunasModel.findByIdAndUpdate(id, updatedTutoring, { new: true });

    res.json(updatedTutoring);
}


//DELETE
export const deleteTutoring = async (req:Request, res:Response) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No post with id: ${id}`);

    await VacunasModel.findByIdAndRemove(id);

    res.json({ message: "Post deleted successfully." });
}

export default router;




