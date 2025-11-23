const express = require("express")
const router  = express.Router();
const Project  = require('../../models/project.model')


//get all projects
router.get('/' , async(req , res)=>{
  try{
   const Projects = await Project.find();
   res.status(200).json(Projects);

  }catch(err){
    res.status(500).json({error:err.message});
  }
});



module.exports = router;