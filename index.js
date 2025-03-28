const express = require('express');
const app = express();

const books = [
  { id: 1, title: 'Harry Potter' },
  { id: 2, title: 'Lord of the Rings' }
];

app.get('/books', (req, res) => {
  res.json(books);
});

app.listen(3000, () => {
  console.log('API running on http://localhost:3000');
});
