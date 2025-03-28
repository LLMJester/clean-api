const express = require('express');
const app = express();

const books = [
  { id: 1, title: 'Harry Potter' },
  { id: 2, title: 'Lord of the Rings' }
];

// Listen on Render’s PORT
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('Welcome to the Book API!');
});

app.get('/books', (req, res) => {
  res.json(books);
});

app.listen(PORT, () => {
  console.log(`API running on http://localhost:${PORT}`);
});
