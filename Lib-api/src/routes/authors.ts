import { Router } from 'express';
import { getAuthors, getAuthorById, createNewAuthor, updateAuthor, deleteAuthor } from '../controllers/authorsController';

const router = Router();

router.get('/', getAuthors);
router.get('/:id', getAuthorById);
router.post('/', createNewAuthor);
router.put('/:id', updateAuthor);
router.delete('/:id', deleteAuthor);

export default router;
