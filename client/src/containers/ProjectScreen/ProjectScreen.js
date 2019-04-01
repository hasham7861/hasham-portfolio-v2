import React, { Component } from 'react';
import ProjectNavbar from '../../components/ProjectNavbar/ProjectNavbar';
import './ProjectScreen.scss';


class ProjectScreen extends Component {
    
    projectName = "";
    projectDescription = "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here'.";
    projectSkillsUsed = "PHP, Javscript";
    projectContributors = "Hasham Alam, Jimmy Yang";
    constructor({props, match}){
        super(props);
        this.projectName = match.params.id;
    }
    
    render(){
        return (
            <>
                <ProjectNavbar projectRoute={this.projectName}/>
                <div className="ProjectScreen">
                    <h1>{this.projectName}</h1>
                    <section className="Description">
                        <h3>Description</h3>
                        <p>{this.projectDescription}</p>
                    </section>
                    <section className="SkillsUsed">
                        <h3>Skills Used</h3>
                        <p>{this.projectSkillsUsed}</p>
                    </section>
                    <section className="Contributors">
                        <h3>Contributors</h3>
                        <p>{this.projectContributors}</p>
                    </section>
                    <section>
                        <a href="https://github.com/hasham7861/PersonalWebsite">
                            View Source Code
                        </a>
                    </section>
                </div>
            </>
        )
    }
}

export default ProjectScreen;
