import express from 'express'; 
import morgan from 'morgan';
import cors from 'cors';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
//RECUERDA IMPORTARLAS RUTAS!!
import tutoringsRoutes from './routes/tutoring';
import questionsRoutes from './routes/questions';
import studentsRoutes from './routes/students';

dotenv.config();

const app = express();

app.use(express.json())                 
app.use(express.urlencoded({ limit: '30mb', extended: true }))            //limito el tamaño, puede q no sea necessario para nuestra aplicacions
app.use(cors());
app.use(morgan("dev"));


//Debo crear una ruta nueva para el nuevo objeto que quiera crear. NO OLVIDAR IMPORTARLAS!!
app.use('/tutor', tutoringsRoutes);
app.use('/question',questionsRoutes);
app.use('/students', studentsRoutes);

//En el momento que quiera crear una base de dato nueva para el examen, solo tengo que cambiar
//El 'pruebaDB'
mongoose.connect(`mongodb+srv://db_user:qqqq@cluster0.fcsym.mongodb.net/pruebaDB?retryWrites=true&w=majority`)       // have to use a template string and interpolate the environment variable.Otherwise, you’ll get an error: Type 'undefined' is not assignable to type 'string'
  .then(() => app.listen(4000, () => console.log(`Base MongoDB conectad, servidor corriendo en el puerto: http://localhost:4000`)))
  .catch((error) => console.log(`${error} no se pudo conectar`));



