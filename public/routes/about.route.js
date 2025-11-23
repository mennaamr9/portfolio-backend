const express = require("express")
const router  = express.Router();
const About  = require('../../models/about.model');



//get all about data
router.get('/' , async(req , res)=>{
  try{
   const aboutData = await About.find();
   res.status(200).json(aboutData);

  }catch(err){
    res.status(500).json({error:err.message});
  }
});

module.exports = router