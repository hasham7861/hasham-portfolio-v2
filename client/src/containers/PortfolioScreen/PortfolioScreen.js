import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import Project from '../../components/Project/Project';
import './PortfolioScreen.scss';

class PortfolioScreen extends Component {
  state = {
    // Random Project Names
    projects: [
      'Donut',
      'Eclair',
      'Froyo',
      'Gingerbread',
      'HoneyComb',
      'Icecream',
      'Jellybean',
    ],
  };

  componentDidMount() {
    // Render the projects and fetch the data here via axios
    // Todo: Load Projects here via api call to github or database
    const projects = [];

    for (let i = 0; i < this.state.projects.length; i++) {
      const projectRoute = `/project/${this.state.projects[i]}`;
      const projectJSX = (
        // TODO: Change the i to a project name instead
        <NavLink className="ProjectLink" to={projectRoute}>
          <Project id={this.state.projects[i]} />
        </NavLink>
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
