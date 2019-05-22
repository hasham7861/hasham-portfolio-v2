const axios = require('axios');

// Get all the public repos from github
class GithubDataController {

    async getRepos(req,res){
        axios.get('https://api.github.com/users/hasham7861/repos')
        .then(response => {
           const repos = response.data;
           res.json(repos)
            
        }).catch((err)=>console.log("Github data cannot be retrieve" + err))        
    }   
}

module.exports = GithubDataController;
