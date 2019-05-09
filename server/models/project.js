module.exports = function (sequelize, DataTypes){
    var project = sequelize.define('project',{
        projectName: DataTypes.STRING,
        projectDesc: DataTypes.STRING,
        NumOfFavorites: DataTypes.DECIMAL,
        languages: DataTypes.STRING,
        srcLink: DataTypes.STRING
    });

    return project;
};