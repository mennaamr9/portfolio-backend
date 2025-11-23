const express = require("express")
const router  = express.Router();
const Project  = require('../models/project.model');
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



//create project
router.post('/' ,upload.single('projectImg') , async(req , res)=>{
  try{
   const {title , desc } = req.body;
   const myProject = await Project.create({title , desc , Image:req.file.filename});
   res.status(201).json(myProject);

  }catch(err){
    res.status(500).json({error:err.message});
  }
})


//get all projects
router.get('/' , async(req , res)=>{
  try{
   const Projects = await Project.find();
   res.status(200).json(Projects);

  }catch(err){
    res.status(500).json({error:err.message});
  }
});


//get project by id
router.get('/:id' , async(req , res)=>{
  try{
   const Projects = await Project.findById(req.params.id);
   res.status(200).json(Projects);

  }catch(err){
    res.status(500).json({error:err.message});
  }
});


//update project by id
router.put('/:id' , async(req , res)=>{
  try{
   const {title , desc } = req.body;
   const Projects = await Project.findByIdAndUpdate(req.params.id ,{title , desc ,  Image} ,{ new: true });
   res.status(200).json(Projects);

  }catch(err){
    res.status(500).json({error:err.message});
  }
});



module.exports = router;