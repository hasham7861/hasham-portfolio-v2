const express = require('express');
const router = express.Router();
const ProjectsDatabaseController = require('../controllers/ProjectsDatabaseController');

// Projects REST API //
const projects = new ProjectsDatabaseController();

// READ Projects
router.get('/projects',(req,res)=>{
    projects.readProjects(req,res);
});

// Add Project
router.post('/projects/new',(req,res)=>{
    projects.createProject(req,res);
});

// Update Project
router.put('/projects/update/:id',(req,res)=>{
    projects.createProject(req,res);
});

// Delete Project
router.delete('/projects/delete/:id',(req,res)=>{
    projects.deleteProject(req,res);
});

module.exports = router;
