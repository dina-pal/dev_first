import express from 'npm:express';

const app = express();

app.get('/', (req, res) =>{
  res.send('Hello Boss!');
})

app.listen(3000)