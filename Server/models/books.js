const mongoose = require("mongoose");
const { Schema } = mongoose;

const productSchema = new mongoose.Schema({
  name: {
    required: true,
    type: String,
  },
  image: {
    data: Buffer,
  },
  category: {
    type: [String],
  },
  details: {
    required: true,
    type: String,
  },
  Author: {
    required: true,
    type: String,
  },
  year: {
    type: Number,
  },
});

module.exports = mongoose.model("Books", productSchema);
