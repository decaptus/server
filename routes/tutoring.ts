import { Router } from "express";

import { getTutorings, getTutoring, createTutoring, updateTutoring, deleteTutoring } from "../controllers/tutoring";

const router = Router();

router.get('/', getTutorings);
router.get('/:id', getTutoring);
router.post('/', createTutoring);
router.put('/:id',updateTutoring)
router.delete('/:id',deleteTutoring);

export default router;