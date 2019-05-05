const express = require('express');
const router = express.Router();
const ProjectsDBConnect = require('../../util/ProjectsDBConnect');


// Projects REST API //

// READ Projects
router.get('/projects/readProjects',(req,res)=>{
    
    const conn = new ProjectsDBConnect().getConnection();
    if(!conn) res.send({message:"database connection failed"});
    const queryStr = "select * from projects";
    conn.query(
        queryStr,
        (err,rows)=>{
            if(err) {
                console.log("Failed to query for projects: " + err);
                res.sendStatus(500);
                return
            };

            res.send(rows);
        }        
    )
 
})


// Add Project
router.post('/projects/addProject',(req,res)=>{

    
    const conn = new ProjectsDBConnect().getConnection();
    if(!conn) res.send({message:"database connection failed"});

    const projectName = req.body.projectName;
    const projectDesc = req.body.projectDesc;
    const numOfFavorites = req.body.numOfFavorites;
    const languages = req.body.languages;
    const srcLink = req.body.srcLink;
   

    let queryStr = "INSERT INTO projects(projectName,projectDesc,numOfFavorites,languages,srcLink) VALUES(?,?,?,?,?)";

    conn.query(
        queryStr,
        [projectName,projectDesc,numOfFavorites,languages,srcLink],
        (err,rows) =>{
            if(err) {
                console.log("Failed to query for projects: " + err);
                res.sendStatus(500);
                return
            };
    
            console.log("Inserted a new user with id:" + rows.insertedId)
            res.end();
        }
    )
});

// Update Project
router.put('/projects/updateProject/:id',(req,res)=>{
    
    const conn = new ProjectsDBConnect().getConnection();
    if(!conn) res.send({message:"database connection failed"});

    const id = req.params.id;

    const projectName = req.body.projectName;
    const projectDesc = req.body.projectDesc;
    const numOfFavorites = req.body.numOfFavorites;
    const languages = req.body.languages;
    const srcLink = req.body.srcLink;

    

    res.end();
});

// Delete Project
router.delete('/projects/deleteProject/:id',(req,res)=>{

});


module.exports = router;
