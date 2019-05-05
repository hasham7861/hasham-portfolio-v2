//connection and crud operations happen here to projects database
var mysql = require('mysql');
class ProjectsDBConnect {

    // Only getConnection when need it and close it when you don't need it
    getConnection (){
        return  mysql.createConnection({
                host:'localhost',
                user:'root',
                password:'has786',
                database:'personalwebsite'
            });
    }

  

}

module.exports = ProjectsDBConnect;