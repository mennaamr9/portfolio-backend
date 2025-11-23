const express = require('express');
const mongoose = require('mongoose');
const app = express();
const port = 5000;
const cors = require("cors");
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));




app.use('/uploads',express.static('./uploads'));

const publicProjectRoute = require('./public/routes/project.route');
const publickSkillRoute= require('./public/routes/skill.route');
const adminProjectRoute = require('./admin/admin.project.routes');
const adminkSkillRoute= require('./admin/admin.skill.routes');

const adminHomeRoute = require('./admin/admin.home.route');
const pulichHomeRoute = require('./public/routes/home.route');

const adminAboutRoute = require('./admin/admin.about.route');
const pulichAboutRoute = require('./public/routes/about.route');

app.use('/public/project',publicProjectRoute);
app.use('/public/skill',publickSkillRoute);
app.use('/admin/project',adminProjectRoute);
app.use('/admin/skill',adminkSkillRoute);
app.use('/admin/home',adminHomeRoute);
app.use('/public/home',pulichHomeRoute);
app.use('/admin/about',adminAboutRoute);
app.use('/public/about',pulichAboutRoute);




// mongodb://127.0.0.1:27017
mongoose.connect('mongodb://localhost:27017/portfolio').then(()=>{
    console.log('database connected');
});

app.listen(port,()=>{
    console.log(`server started at port ${port}`);
    
})