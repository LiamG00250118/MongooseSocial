const mongoose = require('mongoose');

const is_prod = process.env.PORT;

const mongoURL = is_prod ? process.env.MONGODB_URI : 'mongodb://127.0.0.1:27017/thoughts'; // Use the local URL for development

mongoose.connect(mongoURL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;

module.exports = db;

