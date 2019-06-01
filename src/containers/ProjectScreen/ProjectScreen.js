import React, { Component } from 'react';
import { isMobile } from 'react-device-detect';
import ProjectNavbar from '../../components/ProjectNavbar/ProjectNavbar';
import './ProjectScreen.scss';
// import { connect } from 'react-redux';

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
    // console.log(data);
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
  

  // fetch the data from redux and put it in here
  render() {
   
    return (
      <>
        {isMobile ? <ProjectNavbar projectRoute={this.projectName} /> : ''}
        <div className="ProjectScreen">
          <h1>{this.projectName}</h1>
          <section className="Description">
            <h3>Description</h3>
            <p>{this.state.projectData.projectDesc}</p>
          </section>
          <section className="Languages">
            <h3>Languages(s)</h3>
            <p>{this.state.projectData.languages}</p>
          </section>
          <section className="Contributors">
            <h3>Contributor(s)</h3>
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
