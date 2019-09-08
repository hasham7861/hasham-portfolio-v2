import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import Project from '../../components/Project/Project';
import axios from 'axios';
import './PortfolioScreen.scss';


class PortfolioScreen extends Component {
  state = {
    // Hardcoded Project Names
    projects: [],
    projectsData: []
  };



  async componentDidMount() {
    // Render the projects and fetch the data here via axios
    // Todo: Load Projects here via api call to github or database

    let projectsData = [];
    if (localStorage.getItem('projectsData') !== ""){
       //Fetch data from your api
      const res = await axios.get('https://api.github.com/users/hasham7861/repos')
      projectsData = res.data; 
      this.setState({projectsData});
      localStorage.setItem('projectsData',JSON.stringify(projectsData));
    } 
    else{
      projectsData = JSON.parse(localStorage.getItem('projectsData'));
    }
    
    const projects = [];
    
    for (let i = 0; i < this.state.projectsData.length; i++) {
      let project = this.state.projectsData[i];

      // set up the project route
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
      <div className="PortfolioScreen">
         <h1 className="header">My Portfolio</h1>
        <div className="PortfolioContainer">
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


export default PortfolioScreen;