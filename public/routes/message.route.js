const express = require("express")
const router  = express.Router();
const Message = require('../../models/message.model');



//create message
router.post('/' , async(req , res)=>{
  try{
   const {firstName , lastName ,  phone , email , message} = req.body;
   const myMessage = await Message.create({firstName , lastName ,  phone , email , message});
   res.status(201).json(myMessage);

  }catch(err){
    res.status(500).json({error:err.message});
  }
});


