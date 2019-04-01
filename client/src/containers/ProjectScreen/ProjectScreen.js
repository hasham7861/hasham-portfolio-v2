import React, { Component } from 'react';

class ProjectScreen extends Component {
    
    projectName = "";
    constructor({props, match}){
        super(props);
        this.projectName = match.params.id;
        
    }
    
    render(){
        return (
            <div>{this.projectName}</div>
        )
    }
}

export default ProjectScreen;
