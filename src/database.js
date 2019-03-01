const mongoose = require('mongoose');

const db = process.env.MONGODB_URI;

mongoose.connect(db, {
  useNewUrlParser: true
})
  .then(db => console.log('DB is connected'))
  .catch(err => console.log(err));
