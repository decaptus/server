import { Schema, model, Document} from 'mongoose';



// 1. Create an interface representing a document in MongoDB.
 export interface StudentI extends Document {                                                                     //interface o clase??
    name: string,
    email: string,                                                                                                  //nose pq no me deja ponerle date, me da conflicto pf
    avatar: boolean       
    };
  
    


  // 2. Create a Schema corresponding to the document interface.
const StudentSchema = new Schema<StudentI>({
    name: { type: String, required: true },
    email: { type: String, required: true },
    avatar: { type: Boolean, required: true }
    
  });


// 3. Create a Model.
export const StudentModel = model<StudentI>('Students', StudentSchema);  