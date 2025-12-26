const mongoose = require('mongoose');

const personalSchema = new mongoose.Schema({
  fName: { type: String, required: true },
  lName: { type: String, required: true },
  mobile: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  linkedIn: { type: String, required: true },
  github: { type: String, required: true },
  shortBio: { type: String, required: true },
  longBio: [{ type: String }],
});

module.exports =  mongoose.model("Personal", personalSchema);