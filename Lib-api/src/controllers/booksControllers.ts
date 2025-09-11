import { Request, Response } from 'express';
import { books, Book, createBook } from '../models/book';
import { authors } from '../models/author';


export const getBooks = (req: Request, res: Response) => {
    res.json(books);
};


export const getBookById = (req: Request, res: Response) => {
    const book = books.find(b => b.id === req.params.id);
    if (!book) return res.status(404).json({ error: 'Book not found' });
    res.json(book);
};


export const createNewBook = (req: Request, res: Response) => {
    const { title, authorId, year, genre } = req.body;

    if (!title) return res.status(400).json({ error: 'Title is required' });

    let finalAuthorId = authorId;


    if (!finalAuthorId) {
        if (authors.length > 0) {
            finalAuthorId = authors[0].id;
        } else {
            return res.status(400).json({ error: 'No authors available. Create one first.' });
        }
    }

    const newBook = createBook(title, finalAuthorId, year, genre);
    if (!newBook) return res.status(404).json({ error: 'Author not found' });

    res.status(201).json(newBook);
};


export const updateBook = (req: Request, res: Response) => {
    const book = books.find(b => b.id === req.params.id);
    if (!book) return res.status(404).json({ error: 'Book not found' });

    const { title, authorId, year, genre } = req.body;

    if (authorId) {
        const authorExists = authors.some(a => a.id === authorId);
        if (!authorExists) return res.status(404).json({ error: 'Author not found' });
        book.authorId = authorId;
    }

    if (title) book.title = title;
    if (year !== undefined) book.year = Number(year);
    if (genre !== undefined) book.genre = genre;

    res.json(book);
};


export const deleteBook = (req: Request, res: Response) => {
    const index = books.findIndex(b => b.id === req.params.id);
    if (index === -1) return res.status(404).json({ error: 'Book not found' });

    const deleted = books.splice(index, 1);
    res.json({ message: 'Book deleted', book: deleted[0] });
};
