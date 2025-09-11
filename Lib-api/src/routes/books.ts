import { Router } from 'express';
import { getBooks, getBookById, createNewBook, updateBook, deleteBook } from '../controllers/booksControllers';

const router = Router();

router.get('/', getBooks);
router.get('/:', getBookById);
router.post('/', createNewBook);
router.put('/:id', updateBook);
router.delete('/:id', deleteBook)

export default router;