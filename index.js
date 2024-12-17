import express from 'express';
const port = 3000;
const app = express();

app.get('/', (req, res) => {
  res.send('Hello World!');
  console.log(req);
});

app.listen(port, (req, res) => {
  console.log(`App listening on port ${port}`);
});
