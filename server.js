const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
const apiRoutes = require('./routes/api-routes');
const htmlRoutes = require('./routes/html-routes');

// Middleware
  // Sets up static middleware
app.use(express.static('public'));
  // Used to parse incoming requests with JSON payloads
app.use(express.json());
  // Handles form data submitted in HTML forms
app.use(express.urlencoded({extended: true}));

// Routes
app.use(apiRoutes);
app.use(htmlRoutes);

// Verifies that server is running
app.get('/', (req, res) => {
  res.send('Server is running');
});

// Server listener
app.listen(PORT, () => {
  console.log(`App listening at http://localhost:${PORT}`);
});

