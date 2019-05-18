const axios = require('axios');

// Get all the public repos from github

var repos = axios({
 method:'get',
 url:'https://api.github.com/users/hasham7861/repos',
 responseType:'JSON'
});

console.log(repos);
