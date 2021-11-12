import { Schema, model, Document} from 'mongoose';

// 1. Create an interface representing a document in MongoDB.
 export interface TutoringI extends Document {                                                                     //interface o clase??
    title: string;
    description: string;
    creator: string;
    picture?: string;
    price: number;
  }


  // 2. Create a Schema corresponding to the document interface.
const TutoringSchema = new Schema<TutoringI>({
    title: { type: String, required: true },
    description: { type: String, required: true },
    creator: { type: String, required: true },
    picture: String,
    price: { type: Number, required: true }
  });


// 3. Create a Model.
export const TutoringModel = model<TutoringI>('Tutoring', TutoringSchema);                         //porq no me deja usar export default cuando tengo mas de un export?








