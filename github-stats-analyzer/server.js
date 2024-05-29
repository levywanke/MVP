const express = require('express');
const app = express();
const port = 3000; // You can change the port number as needed

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
const githubRoutes = require('./routes/githubRoutes');
const userRoutes = require('./routes/userRoutes');

app.use('/api/github', githubRoutes);
app.use('/api/user', userRoutes);

// Error handling middleware
app.use(function(err, req, res, next) {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

// Start the server
app.listen(port, () => {
  console.log(`GitHub Stats Analyzer app listening at http://localhost:${port}`);
});

