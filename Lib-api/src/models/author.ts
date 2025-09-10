import { v4 as uuidv4 } from 'uuid';

export interface Author {
    id: string;
    name: string;
    bio?: string;
    birthYear?: number;
}


export const authors: Author[] = [];


export const createAuthor = (name: string, bio?: string, birthYear?: number): Author => {
    const newAuthor: Author = { id: uuidv4(), name, bio, birthYear };
    authors.push(newAuthor);
    return newAuthor;
};
