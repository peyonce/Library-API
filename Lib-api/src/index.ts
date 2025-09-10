import express, { Request, Response } from 'express';
import cors from 'cors';
import { logger } from './middleware/logger';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
app.use(logger);

app.get('/', (req: Request, res: Response) => {
    res.json({ message: 'Library API is running' });
});

app.listen(PORT, () => {
    console.log('server running at http://localhost:${PORT}');
});



