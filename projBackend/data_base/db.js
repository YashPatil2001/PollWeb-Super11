const express = require("express");
const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/pollDB");

const pollSchema = new mongoose.Schema({
  _id: {
    type: Number,
    required: true,
  },
  _auth_name: {
    type: String,
    required: true,
  },
  _catogery: {
    type: String,
    required: true,
  },
  _question: {
    type: String,
    required: true,
  },
  _option1: String,
  _option2: String,
  _option3: String,
  _option4: String,
});
const Poll = mongoose.model("Poll", pollSchema);

module.exports = Poll;
