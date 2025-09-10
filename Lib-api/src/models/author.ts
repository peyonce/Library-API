import { Router, Request, Response } from 'express'
import { authors, Author, createAuthor } from '../models/author';

const router = Router();

router.post('/', (req: Request, res: Response) => {
    const { name, bio, birthyear } = req.body;
    if (!name) {
        return res.status(400).json({ error: 'Name is required' });
    }


})
