const app = require('express')();
const connectDB = require('./config/db');
const productRouter = require('./routes/product');

// Database Connection
connectDB();

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

app.use((req, res) => {
  res.json({
    message: 'Everything is working well'
  });
});

app.use('api/product', productRouter);

module.exports = app;
