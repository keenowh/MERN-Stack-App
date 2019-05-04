const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const config = require('config')




const app = express();

// Bodyparser Middleware
app.use(express.json());

// DB Configuration created with key to establish DATABASE connection, contains the DB keys
const db = config.get('mongoURI');

//Connect to database
mongoose
  .connect(db, { 
    useNewUrlParser: true,
    useCreateIndex: true
  })
  .then(() => console.log('MongoDB Connected'))
  .catch(err => console.log(err));

// Use Routes
app.use('/api/items', require('./routes/api/items'));
app.use('/api/users', require('./routes/api/users'));
app.use('/api/auth', require('./routes/api/auth'));


// Serve static assets if in production
if(process.env.NODE_ENV === "production") {
  // set the static folder 
  app.use(express.static('client/build'));
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}


  const port = process.env.PORT || 5000;
  app.listen(port, () => console.log(`Server started on port ${port}`));

