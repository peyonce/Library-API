import { Router, Request, Response } from 'express';
import { authors, Author, createAuthor } from '../models/author';

const router = Router();


router.post('/', (req: Request, res: Response) => {
    const { name, bio, birthYear } = req.body;
    if (!name) {
        return res.status(400).json({ error: 'Name is required' });
    }

    const newAuthor = createAuthor(name, bio, birthYear);
    res.status(201).json(newAuthor);
});


router.get('/', (req: Request, res: Response) => {
    res.json(authors);
});


router.get('/:id', (req: Request, res: Response) => {
    const author: Author | undefined = authors.find((a: Author) => a.id === req.params.id);
    if (!author) return res.status(404).json({ error: 'Author not found' });

    res.json(author);
});


router.put('/:id', (req: Request, res: Response) => {
    const author: Author | undefined = authors.find((a: Author) => a.id === req.params.id);
    if (!author) return res.status(404).json({ error: 'Author not found' });

    const { name, bio, birthYear } = req.body;
    if (name) author.name = name;
    if (bio) author.bio = bio;
    if (birthYear !== undefined) author.birthYear = birthYear;

    res.json(author);
});


router.delete('/:id', (req: Request, res: Response) => {
    const index: number = authors.findIndex((a: Author) => a.id === req.params.id);
    if (index === -1) return res.status(404).json({ error: 'Author not found' });

    const deleted: Author[] = authors.splice(index, 1);
    res.json({ message: 'Author deleted', author: deleted[0] });
});

export default router;
