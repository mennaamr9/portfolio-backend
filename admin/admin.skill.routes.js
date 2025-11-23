const express = require("express")
const router  = express.Router();
const Skill  = require('../models/skills.model');
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
router.post('/' ,upload.single('skillIcon') , async(req , res)=>{
  try{
   const {title , desc } = req.body;
   const myskills = await Skill.create({title , desc , icon:req.file.filename});
   res.status(201).json(myskills);

  }catch(err){
    res.status(500).json({error:err.message});
  }
})


//get all projects
router.get('/' , async(req , res)=>{
  try{
   const skills = await Skill.find();
   res.status(200).json(skills);

  }catch(err){
    res.status(500).json({error:err.message});
  }
});


//get project by id
router.get('/:id' , async(req , res)=>{
  try{
   const skills = await Skill.findById(req.params.id);
   res.status(200).json(skills);

  }catch(err){
    res.status(500).json({error:err.message});
  }
});


//update Skills by id
router.put('/:id' , upload.single('skillIcon') ,async(req , res)=>{
  try{
   const {title , desc ,  icon} = req.body;
   const updatedskills = await Skill.findByIdAndUpdate(
          req.params.id,
         {title , desc },
         { new: true });
   res.status(200).json(updatedskills);

  }catch(err){
    res.status(500).json({error:err.message});
  }
});


// Delete skill
router.delete('/:id', async (req, res) => {
  try {
    await Skill.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: "Skill deleted" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});



module.exports = router;