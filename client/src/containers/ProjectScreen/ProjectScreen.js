import React, { Component } from 'react';
import ProjectNavbar from '../../components/ProjectNavbar/ProjectNavbar';

class ProjectScreen extends Component {
    
    projectName = "";
    constructor({props, match}){
        super(props);
        this.projectName = match.params.id;
    }
    
    render(){
        return (
            <>
            <ProjectNavbar projectRoute={this.projectName}/>
            <div>{this.projectName}</div>
            </>
        )
    }
}

export default ProjectScreen;
