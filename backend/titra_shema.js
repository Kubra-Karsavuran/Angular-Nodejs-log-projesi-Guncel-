const mongoose = require("mongoose");

const titra_shema = new mongoose.Schema({
  message: { type: String },
  type: { type: String },
  description: { type: String },
  flight_id: { type: String },
  timestamp: { type: Date, default: Date.now },
});

module.exports = mongoose.model("titra_shema", titra_shema);
