import { v4 as uuidv4 } from 'uuid';
import { authors } from './author';


export interface Book {
    id: string;
    title: string;
    authorId: string;
    year?: number;
    genre?: string;

}

export const books: Book[] = [];

export const createBook = (title: string, authorId: string, year?: number, genre?: string): Book | null => {
    const authorExists = authors.some(a => a.id === authorId)
    if (!authorExists) return null;

    const newBook: Book = {
        id: uuidv4(),
        title,
        authorId,

    };

    if (year !== undefined) newBook.year = year;
    if (genre !== undefined) newBook.genre = genre;

    books.push(newBook);
    return newBook;

}