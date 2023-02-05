const mongoose = require("mongoose");
const { Schema } = mongoose;

const productSchema = new mongoose.Schema({
  name: {
    required: true,
    type: String,
  },
  url: {
    type: String,
  },
  category: {
    type: [String],
  },
  details: {
    required: true,
    type: String,
  },
  posted: {
    type: Date,
    default: new Date(),
  },
});

module.exports = mongoose.model("Videos", productSchema);
