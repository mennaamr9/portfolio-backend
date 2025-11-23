const { match } = require("assert");
const express = require("express")
const mongoose = require('mongoose');

const messageSchema = new mongoose.Schema({
  firstName:{
    type:String,
    required:true,
    minlength:3
  },
  lasttName:{
    type:String,
    required:true,
    minlength:3
  },
  email:{
    type:String,
    lowercase:true,
    trim:true,
    match:/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
    unique:true
  },
  phone:{
    type:String,
    required:true,
  },
  message:{
    type:String,
    required:true,
  }
},{
  timestamps:true
});

const Message = mongoose.model('Message' , messageSchema);
Message.syncIndexes().then(_=console,log('Message indexes synced'));
