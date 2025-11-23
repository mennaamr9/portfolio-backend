const express = require("express")
const mongoose = require('mongoose');

const homeSchema = new mongoose.Schema({
  title:{
    type:String,
    required:true,
    minlength:3
  },
  subTitle:{
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

const Home = mongoose.model('Home' , homeSchema);
module.exports = Home;



