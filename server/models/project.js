class Project{
    constructor(id,name,description,numOfFavorites,languages,srcLink)
    {
        this.id = id;
        this.name = name;
        this.description = description;
        this.numOfFavorites = numOfFavorites;
        this.languages = languages;
        this.srcLink = srcLink;
    }
    
    getId = _ => this.id;
    setId = (newId) => this.id = newId;

    getName = _ => this.name;
    setName = (newName) => {this.name = newName};

    getDescription = _ => this.description;
    setDescription = (newDesc) => this.description = newDesc;
    
    getNumOfFavorites = _ => this.numOfFavorites;
    setNumOfFavorites = (newNum) => this.numOfFavorites = newNum;
    
    getLanguages = _ => this.languages;
    setLanguages = (newLangs) => this.languages = newLangs;
    
    getSrcLink = _ => this.srcLink;
    setSrcLink = (newLink) => this.srcLink = newLink;
    
}