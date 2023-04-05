const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const SessionSchema = new Schema({
  expires: { type: Date },
  sessionID: { type: String },
  session: { type: Object },
  identificadorUUI:{type: Number}
});

module.exports = mongoose.model('Session', SessionSchema);