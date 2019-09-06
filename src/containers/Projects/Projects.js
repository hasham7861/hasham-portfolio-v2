import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import './Projects.scss';
import Project from '../../components/Project/Project';
import axios from 'axios';

class Projects extends Component {
  state = {
    // Hardcoded Project Names
    projects: [],
    projectsData: []
  };

  async componentDidMount() {

     //Fetch data from your api
     const res = await axios.get('https://hashamalamapi.herokuapp.com/github/repos')
     const projectsData = res.data; 
     this.setState({projectsData});

    const projects = [];

    for (let i = 0; i < this.state.projectsData.length; i++) {
      let project = this.state.projectsData[i];
      const projectRoute = `/project/${project.name}`;
      
       // taking only the data that I need
      let projectData =  {
          projectName: project.name,
          projectDesc: project.description,
          numOfFavorites: project.watchers_count,
          languages: project.language,
          srcLink: project.html_url
      };
      

      // Change project screen data based on the clicked project
      let changeProjectData = (projectData) => {
        localStorage.setItem('projectData', JSON.stringify(projectData));
      }

      const projectJSX = (
        <NavLink className="ProjectLink" to={projectRoute} onClick={() => changeProjectData(projectData)}>
          <Project name={projectData.projectName} about={projectData.projectDesc} />
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
