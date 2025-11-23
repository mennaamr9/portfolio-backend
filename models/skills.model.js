const express = require("express")
const mongoose = require('mongoose');

const skillSchema = new mongoose.Schema({
  title:{
    type:String,
    required:true,
    minlength:3
  },
  desc:{
    type:String,
    required:true,
  },
  icon:{
    type:String,
    required:true,
  }
},{
  timestamps:true
});

const Skill = mongoose.model('Skill' , skillSchema);
module.exports = Skill;

// Skills.syncIndexes().then(_=console,log('skills indexes synced'));