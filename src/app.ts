import express, { Application, Request, Response } from 'express';

const app: Application = express();

app.get('/', (req: Request, res: Response) => {
  res.send('hello');
});
const PORT = 5000;

app.listen(PORT, () => console.log(`Server Running on port ${PORT}`));
