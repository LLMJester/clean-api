const express = require('express');
const app = express();

const books = [
  { id: 1, title: 'Harry Potter' },
  { id: 2, title: 'Lord of the Rings' }
];

// Root route (this will fix the "Cannot GET /" error)
app.get('/', (req, res) => {
  res.send('Welcome to the Book API!');
});

// Books route
app.get('/books', (req, res) => {
  res.json(books);
});

// Start the server
app.listen(3000, () => {
  console.log('API running on http://localhost:3000');
});
