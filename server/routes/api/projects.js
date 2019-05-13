const express = require('express');
const router = express.Router();

const db = require('../../models');
db.sequelize.sync().then(function (){
});

// Projects REST API //

// READ Projects
router.get('/projects/all',(req,res)=>{
    db.Project.findAll({}).then(function (result){
        res.json(result);
    });
})

// Add Project
router.post('/projects/new',(req,res)=>{
    db.Project.create({
        projectName: req.body.projectName,
        projectDesc: req.body.projectDesc,
        numOfFavorites: req.body.numOfFavorites,
        languages: req.body.languages,
        srcLink: req.body.srcLink
    }).then(function (result){
        res.json(result);
    });
});

// Update Project
router.put('/projects/update/:id',(req,res)=>{

    db.Project.update({
        projectName: req.body.projectName,
        projectDesc: req.body.projectDesc,
        numOfFavorites: req.body.numOfFavorites,
        languages: req.body.languages,
        srcLink: req.body.srcLink
    },
    {
        where: {
            id: req.params.id
        }
    }).then(function (result){
        res.json(result);
    })
});

// Delete Project
router.delete('/projects/delete/:id',(req,res)=>{
    db.Project.destroy({
        where:{
            id: req.params.id
        }
    }).then(function(result){
        res.json(result);
    })
});

module.exports = router;
