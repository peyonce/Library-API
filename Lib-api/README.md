# Library API

A minimal RESTful API built with **TypeScript + Express** for managing a community library system.  

## Features
- Manage Authors (CRUD)
- Manage Books (CRUD)
- Link books to authors
- Middleware (logger, validation, error handling)
- JSON responses with status codes

## Tech Stack
- Node.js
- Express
- TypeScript

## Scripts
- `npm run dev` – Run in development with ts-node-dev
- `npm run build` – Compile TypeScript to JavaScript
- `npm start` – Run compiled app from `dist/`

## Endpoints (Core)
### Authors
- `POST /authors` – Create new author
- `GET /authors` – List all authors
- `GET /authors/:id` – Get author by ID
- `PUT /authors/:id` – Update author
- `DELETE /authors/:id` – Delete author
- `GET /authors/:id/books` – List books by author

### Books
- `POST /books` – Create new book
- `GET /books` – List all books
- `GET /books/:id` – Get book by ID
- `PUT /books/:id` – Update book
- `DELETE /books/:id` – Delete book

## Setup
```bash
npm install
npm run dev
