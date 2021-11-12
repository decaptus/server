import {Router} from 'express';

import { getStudents, getStudent, createStudent, updateStudent , deleteStudent} from '../controllers/students';

const router = Router();

router.get('/', getStudents);
router.post('/', createStudent);
router.get('/:id', getStudent);
router.delete('/:id', deleteStudent);
router.put('/:id',updateStudent);


export default router;