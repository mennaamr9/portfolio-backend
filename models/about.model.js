const express = require("express")
const mongoose = require('mongoose');

const aboutSchema = new mongoose.Schema({
  title:{
    type:String,
    required:true,
    minlength:3
  },
  desc:{
    type:String,
    required:true,
  },
  Image:{
    type:String,
    required:true,
  }
},{
  timestamps:true
});

const About = mongoose.model('About' , aboutSchema);
module.exports = About;

