const db = require('../models');

class ProjectsDatabaseController{

    constructor(){
        //initialize the database connection
        db.sequelize.sync().then(()=>{}).catch((err)=>console.log("Cannot connect to database" + err));
    }
    // Read all the projects within the database
    async readProjects(req,res){
        let result = await db.Project.findAll({});
        res.json(result);       
    }
    // Create a project in within the database
    async createProject(req,res){
        let result = await db.Project.create({
            projectName: req.body.projectName,
            projectDesc: req.body.projectDesc,
            numOfFavorites: req.body.numOfFavorites,
            languages: req.body.languages,
            srcLink: req.body.srcLink
        });

        res.json(result); 
    }
    // Update a project within the database
    async updateProject(req,res){
        let result = await db.Project.update({
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
        });

       res.json(result);
    }
    // Delete a project within the database
    async deleteProject(req,res){
        let result = await db.Project.destroy({
            where:{
                id: req.params.id
            }
        });

        res.json(result);
        
    }
    
}

module.exports = ProjectsDatabaseController;