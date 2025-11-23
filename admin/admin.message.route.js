const express = require("express")
const router  = express.Router();
const Message  = require('../models/message.model');


//get all messages
router.get('/' , async(req , res)=>{
  try{
   const Messages = await Message.find();
   res.status(200).json(Messages);

  }catch(err){
    res.status(500).json({error:err.message});
  }
});


//get message by id
router.get('/:id' , async(req , res)=>{
  try{
   const Messages = await Message.findById(req.params.id);
   res.status(200).json(Messages);

  }catch(err){
    res.status(500).json({error:err.message});
  }
});


//delete messages by id
router.delete('/:id' , async(req , res)=>{
  try{
   const Messages = await Message.findByIdAndDelete(req.params.id);
   res.status(200).json(Messages);

  }catch(err){
    res.status(500).json({error:err.message});
  }
});


module.exports = router;