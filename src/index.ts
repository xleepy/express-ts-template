import express from 'express';
import helmet from 'helmet';
import fs from 'fs';

const app = express();

app.use(express.json());
app.use(helmet());

app.get('/', (_, res) => {
  res.send('hello world');
});

app.post('/test', (req, res) => {
  fs.writeFileSync('./test.json', JSON.stringify(req.body));
  res.send(200);
});

app.listen(3000, () => {
  console.log('Example app listening on port 3000!');
});
