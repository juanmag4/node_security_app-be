const mongoose = require('mongoose');

const settingsSchema = new mongoose.Schema({
  userId: { type: mongoose.Types.ObjectId, unique: true, required: true },
  videoQuality: { type: Number, unique: false, required: true }
});

module.exports = mongoose.model('Settings', settingsSchema);
