const express = require('express');
const cors = require('cors');  // Import CORS
const app = express();

// Enable CORS for all routes
app.use(cors());

// Sample book data
const books = [
  { id: 1, title: 'Harry Potter' },
  { id: 2, title: 'Lord of the Rings' }
];

// API endpoint to get books
app.get('/books', (req, res) => {
  res.json(books);  // Send books data as a JSON response
});

// Start the server
app.listen(3000, () => {
  console.log('API is running on http://localhost:3000');
});
