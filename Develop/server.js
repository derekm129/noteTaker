const express = require('express');
const path = require('path');
const app = express();
const PORT = 3000;

// Sets up static middleware
app.use(express.static('public'));
// Used to parse incoming requests with JSON payloads
app.use(express.json());
// Handles form data submitted in HTML forms
app.use(express.urlencoded({extendended: true}));

// Routes
const apiRoutes = require("./routes/api-routes");
app.use(apiRoutes);

const htmlRoutes = require("./routes/html-routes");
app.use(htmlRoutes);

// Server listener
app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT}`)
);