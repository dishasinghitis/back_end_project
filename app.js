const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000; // Replace with your desired port

// Parse data from forms
app.use(bodyParser.urlencoded({ extended: true }));

// Mock data (replace with database access)
const photographers = [
  { id: 1, name: "John Doe", bio: "Experienced landscape photographer..." },
  // More photographers
];

// Get all photographers
app.get('/photographers', (req, res) => {
  res.json(photographers);
});

// Get specific photographer by ID (replace with actual logic)
app.get('/photographers/:id', (req, res) => {
  const id = req.params.id;
  const photographer = photographers.find(p => p.id === parseInt(id));
  if (photographer) {
    res.json(photographer);
  } else {
    res.status(404).send('Photographer not found');
  }
});

// Handle contact form submissions (replace with actual email sending)
app.post('/contact', (req, res) => {
  const name = req.body.name;
  const email = req.body.email;
  const message = req.body.message;
  console.log(`Received message from ${name} - ${email}: ${message}`);
  res.send('Thank you for your message!');
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
