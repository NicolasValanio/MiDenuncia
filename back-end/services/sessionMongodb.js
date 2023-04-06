const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const sessionSchema = new Schema({
  sessionId: String,
  session: Object,
  createdAt: { type: Date, expires: 60 * 60 * 24 * 7, default: Date.now } // Expire session in 1 week
});

const Session = mongoose.model('mySessions', sessionSchema);

module.exports = Session;