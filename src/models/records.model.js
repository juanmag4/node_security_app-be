const mongoose = require('mongoose');

const recordsSchema = new mongoose.Schema({
  userId: { type: Number, unique: true, required: true },
  records: [{
    url: { type: String, unique: false, required: true },
    title: { type: String, unique: false, required: true },
    date: { type: String, unique: false, required: true },
    motive: { type: String, unique: false, required: true },
    location: { type: String, unique: false, required: true }
  }]
});

module.exports = mongoose.model('Records', recordsSchema);
