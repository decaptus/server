import { Schema, model, Document} from 'mongoose';

// 1. Create an interface representing a document in MongoDB.
 export interface TutoringI extends Document {                                                                     //interface o clase??
    name: string;
    email: string;
    password: string;
    age: number;
    subjects: string;     //problemas con Array<String> al ponerselo en el schema
  }


  // 2. Create a Schema corresponding to the document interface.
const TutoringSchema = new Schema<TutoringI>({
    email: { type: String, required: true },
    password: { type: String, required: true },
    age: { type: Number, required: true },
    subjects: { type: String, required: true }
  });


// 3. Create a Model.
export const TutoringModel = model<TutoringI>('Tutoring', TutoringSchema);                         //porq no me deja usar export default cuando tengo mas de un export?










/*
UserSchema.pre('save', function(next){
    if(this.isNew || this.isModified('password')){

        const document = this;

        bcrypt.hash(document.password, saltRounds, (err, hashedPassword) =>{
            if(err){
                next(err);
            }else{
                document.password = hashedPassword;
                next();
            }
        });
    }else{
        next();
    }
})


UserSchema.methods.isCorrectPassword = function(password, callback){
    bcrypt.compare(password, this.password, function(err, same){
        if(err){
            callback(err);
        }else{
            callback(err, same);
        }
    })
}

var User = mongoose.model('User', UserSchema);

export default User;
*/





