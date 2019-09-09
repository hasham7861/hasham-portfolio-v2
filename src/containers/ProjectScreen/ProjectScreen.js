import React, { Component } from 'react';
import './ProjectScreen.scss';

class ProjectScreen extends Component {

  projectName = '';
  projectContributors = 'Hasham Alam';

  constructor({ props, match }) {
    super(props);
    this.projectName = match.params.name;
    this.state ={
      projectData :{}
    }
  }

  componentDidMount(){
    const data = JSON.parse(localStorage.getItem('projectData'));

    this.setState(
      {
        projectData:{
          projectName: data.projectName,
          projectDesc: data.projectDesc,
          numOfFavorites:data.numOfFavorites,
          languages:data.languages,
          srcLink:data.srcLink 
        },
      },
    
      )
  }

  render() {
   
    return (
      <>
        <div className="ProjectScreen">
          <h1 className="header">{this.projectName}</h1>
          <section className="Description">
            <h3>Description</h3>
            <p>{this.state.projectData.projectDesc}</p>
          </section>
          <section className="Languages">
            <h3>Language</h3>
            <p>{this.state.projectData.languages}</p>
          </section>
          <section className="Contributors">
            <h3>Author</h3>
            <p>Hasham Alam</p>
          </section>
          <section>
            <a href={this.state.projectData.srcLink}>
              Click here for more details
            </a>
          </section>
        </div>
      </>
    );
  }
}


export default ProjectScreen;
