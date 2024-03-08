const express = require('express');
const app = express();

// Define routes
app.get('/', (req, res) => {
  res.send('Welcome to DesignGenius! Learn graphic design with our comprehensive and affordable courses and resources.');
});

app.get('/courses', (req, res) => {
  res.send('Explore our collection of courses, designed to help you master any design software or style.');
});

app.get('/resources', (req, res) => {
  res.send('Access our wide range of resources, including tutorials, templates, and design assets, to take your skills to the next level.');
});

app.get('/register', (req, res) => {
  res.send('Ready to become a DesignGenius? Register for our platform today and start your design journey!');
});

// Start the server
app.listen(3000, () => {
  console.log('DesignGenius server is running on port 3000.');
});