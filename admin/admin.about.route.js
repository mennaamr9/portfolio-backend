const express = require("express")
const router  = express.Router();
const About  = require('../models/about.model');
const multer = require('multer');

const storage = multer.diskStorage({
  destination:(req,file,cd)=>{
    cd(null,'uploads')
  },
  filename:(req,file,cb)=>{
    cb(null, Date.now()+ '_' + file.originalname)
  }
});
const upload =multer({storage})



//create about
router.post('/' ,upload.single('AboutImg') , async(req , res)=>{
  try{
   const {title , desc } = req.body;
   const myAbout = await About.create({title , desc ,Image:req.file.filename});
   res.status(201).json(myAbout);

  }catch(err){
    res.status(500).json({error:err.message});
  }
})


//get all about data
router.get('/' , async(req , res)=>{
  try{
   const aboutData = await About.find();
   res.status(200).json(aboutData);

  }catch(err){
    res.status(500).json({error:err.message});
  }
});


//get aboutData by id
router.get('/:id' , async(req , res)=>{
  try{
   const aboutData = await About.findById(req.params.id);
   res.status(200).json(aboutData);

  }catch(err){
    res.status(500).json({error:err.message});
  }
});


//update aboutData by id
router.put('/:id' , async(req , res)=>{
  try{
   const {title , desc } = req.body;
   const aboutData = await About.findByIdAndUpdate(req.params.id ,{title , desc , Image} ,{ new: true });
   res.status(200).json(aboutData);

  }catch(err){
    res.status(500).json({error:err.message});
  }
});



module.exports = router;