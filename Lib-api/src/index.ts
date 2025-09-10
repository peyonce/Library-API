import express, { Request, Response } from 'express';
import cors from 'cors';
import { logger } from './middleware/logger';
import authorRoutes from './routes/authors'

const app = express();
const PORT: number = parseInt(process.env.PORT || '3000', 10);

app.use(cors());
app.use(express.json());
app.use(logger);

app.use('/authors', authorRoutes);

app.get('/', (req: Request, res: Response) => {
    res.json({ message: 'Library API is running' });
});

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});


