const mongoose = require('mongoose');
const Feed = require('../models/feed.model');

const connectDb = () => {
  return mongoose.connect(process.env.DATABASE_URL);
};

const models = { Feed };

module.exports = {
  models,
  connectDb
};
