const app = require('express')();
const connectDB = require('./config/db');

// Database Connection
connectDB();

app.use((req, res) => {
  res.json({
    message: 'Everything is working well'
  });
});

module.exports = app;
