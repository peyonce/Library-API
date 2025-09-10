import { Router, Request, Response } from 'express';
import { books, Book, createBook } from '../models/book';
import { authors } from '../models/author';

const router = Router();

router.post('/', (req: Request, res: Response) => {
    const { title, authorId, year, genre } = req.body;

    if (!title || !authorId) {
        return res.status(400).json({ error: 'Title and authorId are required' });
    }

    const newBook = createBook(title, authorId, year, genre);
    if (!newBook) {
        return res.status(404).json({ error: 'Author not found' });
    }

    res.status(201).json(newBook);
});
