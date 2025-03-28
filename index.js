const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors()); // Enable CORS for all routes

const books = [
  { id: 1, title: 'Harry Potter' },
  { id: 2, title: 'Lord of the Rings' }
];

app.get('/books', (req, res) => {
  res.json(books); // Send book data as JSON response
});

app.listen(3000, () => {
  console.log('API running on http://localhost:3000');
});
