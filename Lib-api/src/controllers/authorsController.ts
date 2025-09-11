import { Request, Response } from 'express';
import { authors, Author, createAuthor } from '../models/author';


export const getAuthors = (req: Request, res: Response) => {
    res.json(authors);
};


export const getAuthorById = (req: Request, res: Response) => {
    const author = authors.find(a => a.id === req.params.id);
    if (!author) return res.status(404).json({ error: 'Author not found' });
    res.json(author);
};


export const createNewAuthor = (req: Request, res: Response) => {
    const { name, bio, birthYear } = req.body;

    if (!name) {
        return res.status(400).json({ error: 'Name is required' });
    }

    const newAuthor = createAuthor(name, bio, birthYear);
    res.status(201).json(newAuthor);
};


export const updateAuthor = (req: Request, res: Response) => {
    const author = authors.find(a => a.id === req.params.id);
    if (!author) return res.status(404).json({ error: 'Author not found' });

    const { name, bio, birthYear } = req.body;
    if (name) author.name = name;
    if (bio) author.bio = bio;
    if (birthYear !== undefined) author.birthYear = birthYear;

    res.json(author);
};


export const deleteAuthor = (req: Request, res: Response) => {
    const index = authors.findIndex(a => a.id === req.params.id);
    if (index === -1) return res.status(404).json({ error: 'Author not found' });

    const deleted = authors.splice(index, 1);
    res.json({ message: 'Author deleted', author: deleted[0] });
};