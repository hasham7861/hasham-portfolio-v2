module.exports = function (sequelize, DataTypes){
    var Project = sequelize.define('Project',{
        projectName: DataTypes.STRING,
        projectDesc: DataTypes.STRING,
        numOfFavorites: DataTypes.INTEGER,
        languages: DataTypes.STRING,
        srcLink: DataTypes.STRING
    });

    return Project;
};