const express = require("express")
const router  = express.Router();
const Home  = require('../models/home.model');
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



//create home
router.post('/' ,upload.single('HomeImg') , async(req , res)=>{
  try{
   const {title , desc ,subTitle} = req.body;
   const myHome = await Home.create({title , desc ,subTitle, Image:req.file.filename});
   res.status(201).json(myHome);

  }catch(err){
    res.status(500).json({error:err.message});
  }
})


//get all home data
router.get('/' , async(req , res)=>{
  try{
   const homeData = await Home.find();
   res.status(200).json(homeData);

  }catch(err){
    res.status(500).json({error:err.message});
  }
});


//get homeData by id
router.get('/:id' , async(req , res)=>{
  try{
   const homeData = await Home.findById(req.params.id);
   res.status(200).json(homeData);

  }catch(err){
    res.status(500).json({error:err.message});
  }
});


//update homeData by id
router.put('/:id' , async(req , res)=>{
  try{
   const {title , desc , subTitle} = req.body;
   const homeData = await Home.findByIdAndUpdate(req.params.id ,{title , desc , subTitle , Image} ,{ new: true });
   res.status(200).json(homeData);

  }catch(err){
    res.status(500).json({error:err.message});
  }
});



module.exports = router;