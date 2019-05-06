import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import Project from '../../components/Project/Project';
import './PortfolioScreen.scss';


class PortfolioScreen extends Component {
  state = {
    // Random Project Names
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
    // Render the projects and fetch the data here via axios
    // Todo: Load Projects here via api call to github or database

    const projects = [];

    for (let i = 0; i < this.state.projectsData.length; i++) {
      let project = this.state.projectsData[i];

      const projectRoute = `/project/${project.projectName}`;
      console.log(projectRoute);

      /* Store this in the redux store and use it on projectscreen page.
         
        */
      const newProjectState = {
        style: {
          height: '70px',
        },
        projectData: {
          projectName: project.projectName,
          projectDesc: project.projectDesc,
          numOfFavorites: project.numOfFavorites,
          languages: project.languages,
          srcLink: project.srcLink
        }
      }

      // Change project screen data based on the clicked project
      let changeProjectData = (newProjectState) => {
        // this.props.changeProjectData(newProjectState);

        localStorage.setItem('projectData', JSON.stringify(newProjectState.projectData));

      }


      const projectJSX = (
        <NavLink className="ProjectLink" to={projectRoute} onClick={() => changeProjectData(newProjectState)}>
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
      <div className="PortfolioScreen">
        <h1>My Pinned Github Portfolio</h1>
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