const mongoose = require('mongoose');

const settingsSchema = new mongoose.Schema({
  userId: { type: Number, unique: true, required: true },
  videoQuality: { type: Number, unique: false, required: true }
});

module.exports = mongoose.model('Settings', settingsSchema);
