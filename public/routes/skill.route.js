const express = require("express")
const mongoose = require('mongoose');
const router  = express.Router();
const Skill = require('../../models/skills.model')

// const skillsSchema = new mongoose.Schema({
//   title:{
//     type:String,
//     required:true,
//     minlength:3
//   },
//   desc:{
//     type:String,
//     required:true,
//   },
//   icon:{
//     type:String,
//     required:true,
//   }
// },{
//   timestamps:true
// });

// const Skills = mongoose.model('Skills' , skillsSchema);
// Skills.syncIndexes().then(_=console,log('skills indexes synced'));

//create Skills
// router.post('/' , async(req , res)=>{
//   try{
//    const {title , desc ,  icon} = req.body;
//    const mySkills = await Skill.create({title , desc ,  icon});
//    res.status(201).json(mySkills);

//   }catch(err){
//     res.status(500).json({error:err.message});
//   }
// })


//get all skills
router.get('/' , async(req , res)=>{
  try{
   const Skills = await Skill.find();
   res.status(200).json(Skills);

  }catch(err){
    res.status(500).json({error:err.message});
  }
});


//get project by id
// router.get('/:id' , async(req , res)=>{
//   try{
//    const Skill = await Skill.findById(req.params.id);
//    res.status(200).json(Skill);

//   }catch(err){
//     res.status(500).json({error:err.message});
//   }
// });


// //update project by id
// router.put('/:id' , async(req , res)=>{
//   try{
//    const {title , desc ,  icon} = req.body;
//    const Skill = await Skill.updateOne({id:req.params.id} ,{title , desc , icon} );
//    res.status(200).json(Skill);

//   }catch(err){
//     res.status(500).json({error:err.message});
//   }
// });


module.exports = router;