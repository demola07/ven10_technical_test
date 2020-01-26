const express = require('express');
const app = express();
const path = require('path');
const connectDB = require('./config/db');
const productRouter = require('./routes/product');

// Database Connection
connectDB();

//Initialze express bodyparser middleware
app.use(express.json({ extended: false }));

//CORS
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization'
  );
  res.setHeader(
    'Access-Control-Allow-Methods',
    'GET, POST, PUT, DELETE, PATCH, OPTIONS'
  );
  next();
});

app.use('/images', express.static('images'));
// app.use('/images', express.static(path.join(__dirname, '/images')));
app.use('/api/product', productRouter);

module.exports = app;
