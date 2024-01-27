import express from 'express';
import helmet from 'helmet';

const app = express();

app.use(express.json());
app.use(helmet());

app.get('/', (_, res) => {
  res.send('hello world');
});

app.listen(3000, () => {
  console.log('Example app listening on port 3000!');
});
