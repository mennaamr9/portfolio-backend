const express = require("express")
const router  = express.Router();
const Home  = require('../../models/home.model');



//get all home data
router.get('/' , async(req , res)=>{
  try{
   const homeData = await Home.find();
   res.status(200).json(homeData);

  }catch(err){
    res.status(500).json({error:err.message});
  }
});

module.exports = router