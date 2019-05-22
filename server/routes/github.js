const express = require('express'); // Helps Create Middleware easily
const router = express.Router();
const GithubDataController = require('../controllers/GithubDataController');

router.get('/github/repos', (req,res)=>{
    const githubDataController = new GithubDataController();
    githubDataController.getRepos(req,res);
   
})

module.exports = router;