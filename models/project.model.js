const express = require("express")
const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema({
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

const Project = mongoose.model('Project' , projectSchema);
module.exports = Project;


// Project.syncIndexes().then(_=console,log('project indexes synced'));
