import { Schema, model, Document, ObjectId} from 'mongoose';

import { VacunasI } from './tutoring'



// 1. Create an interface representing a document in MongoDB.
 export interface Personas extends Document {                                                                     //interface o clase??
    persona: string,
    fecha: string,                                                                                                  //nose pq no me deja ponerle date, me da conflicto pf
    dni: string,
    tel: string,
    fiebre: string,       
    tos: string,       
    respiracion: string,       
    malestar: string,
    vacunas: Array<ObjectId>       
    };
  
    


  // 2. Create a Schema corresponding to the document interface.
const PersonasSchema = new Schema<Personas>({
    persona: { type: String, required: true },
    fecha: { type: String, required: true },
    dni: { type: String, required: true },
    tel: { type: String, required: true },
    fiebre: { type: String, required: true },
    tos: { type: String, required: true },
    respiracion: { type: String, required: true },
    malestar: { type: String, required: true },
    vacunas: [{ type: Schema.Types.ObjectId, ref: 'VacunasI', required: false }],
  });


// 3. Create a Model.
export const PersonaModel = model<Personas>('Personas', PersonasSchema);  