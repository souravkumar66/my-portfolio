const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema({
  title: { type: String, required: true },
  category: { type: String, required: true },
  image: { type: String, required: true },
  link: { type: String }, // প্রজেক্টের লাইভ লিংক (ঐচ্ছিক)
}, { timestamps: true });

module.exports = mongoose.model('Project', projectSchema);