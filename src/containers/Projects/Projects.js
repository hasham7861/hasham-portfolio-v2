import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import './Projects.scss';
import Project from '../../components/Project/Project';

class Projects extends Component {
  state = {
    // Hardcoded Project Names
    projects: [],
    projectsData: [
      {
        "projectName": "PersonalWebsiteV2",
        "projectDesc": "Redesigning Personal Website and Automating Portfolio (Prototype)",
        "numOfFavorites": "1",
        "languages": "Javascript",
        "srcLink": "https://github.com/hasham7861/PersonalWebsiteV2"
      },
      {
        "projectName": "LandingPage",
        "projectDesc": "Created a Landing Page using Sass",
        "numOfFavorites": "0",
        "languages": "CSS",
        "srcLink": "https://github.com/hasham7861/LandingPage"
      }, {
        "projectName": "Asteroid-Game",
        "projectDesc": "Asteroid Game made on canvas using the zim.js framework",
        "numOfFavorites": "0",
        "languages": "HTML",
        "srcLink": "https://github.com/hasham7861/AsteroidGame"
      }
    ]
  };

  componentDidMount() {
    const projects = [];

    for (let i = 0; i < this.state.projectsData.length; i++) {
      let project = this.state.projectsData[i];
      const projectRoute = `/project/${project.projectName}`;
      
      const projectData =  {
          projectName: project.projectName,
          projectDesc: project.projectDesc,
          numOfFavorites: project.numOfFavorites,
          languages: project.languages,
          srcLink: project.srcLink
      };
      

      // Change project screen data based on the clicked project
      let changeProjectData = (projectData) => {
        localStorage.setItem('projectData', JSON.stringify(projectData));
      }

      const projectJSX = (
        <NavLink className="ProjectLink" to={projectRoute} onClick={() => changeProjectData(projectData)}>
          <Project name={project.projectName} about={project.projectDesc} />
        </NavLink >
      );

      projects.push(projectJSX);
    }

    this.setState({
      projects,
    });
  }

  render() {
    return (
      <div className="ProjectsBackDrop" style={this.props.style}>
        <div className="ProjectsContainer">
          <ul>
            {this.state.projects.map((project, index) => (
              <li key={index}>{project}</li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  style: state.projects.style,
});

const mapDispatchToProps = dispatch => ({});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Projects);
