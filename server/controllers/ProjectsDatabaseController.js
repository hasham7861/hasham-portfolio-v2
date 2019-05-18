const db = require('../models');

class ProjectsDatabaseController{

    constructor(){
        //initialize the database connection
        db.sequelize.sync().then(()=>{}).catch((err)=>console.log("Cannot connect to database" + err));
    }
    // Read all the projects within the database
    readProjects(req,res){
        db.Project.findAll({}).then(function (result){
            res.json(result);
        });
    }
    // Create a project in within the database
    createProject(req,res){
        db.Project.create({
            projectName: req.body.projectName,
            projectDesc: req.body.projectDesc,
            numOfFavorites: req.body.numOfFavorites,
            languages: req.body.languages,
            srcLink: req.body.srcLink
        }).then(function (result){
            res.json(result);
        });
    }
    // Update a project within the database
    updateProject(req,res){
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
    }
    // Delete a project within the database
    deleteProject(req,res){
        db.Project.destroy({
            where:{
                id: req.params.id
            }
        }).then(function(result){
            res.json(result);
        })
    }
    
}

module.exports = ProjectsDatabaseController;