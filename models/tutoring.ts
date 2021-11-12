import { Schema, model, Document} from 'mongoose';

// 1. Create an interface representing a document in MongoDB.
 export interface VacunasI {                                                                     //interface o clase??
    Nombre: string;
  }


  // 2. Create a Schema corresponding to the document interface.
const VacunasSchema = new Schema<VacunasI>({
  Nombre: { type: String, required: true },
  });


// 3. Create a Model.
export const VacunasModel = model<VacunasI>('Vacunas', VacunasSchema);                         //porq no me deja usar export default cuando tengo mas de un export?








