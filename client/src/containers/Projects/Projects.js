import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import "./Projects.css";
import Project from "../../components/Project/Project";

class Projects extends Component {

  state = {
    // Random Project Names
    projects: ["Donut","Eclair","Froyo","Gingerbread","HoneyComb","Icecream","Jellybean"],
  }
  
  componentDidMount() {
    //Render the projects and fetch the data here via axios
    // Todo: Load Projects here via api call to github or database
    const projects = []

    for(var i=0; i<this.state.projects.length; i++){

      const projectJSX = (
        // TODO: Change the i to a project name instead
        <Link to={"/project"+"/" + this.state.projects[i]}>
          <Project id={this.state.projects[i]}/>
        </Link>
      );


      projects.push(projectJSX);
    }

    this.setState({
      projects: projects
    });
         
    
  }

  render() {
      return (
          <div className="ProjectsBackDrop" style={this.props.style}>
              {/* <h1>Loaded Projects</h1> */}
              <div className="ProjectsContainer">
                <ul>
                  {this.state.projects.map((project,index)=>
                    <li key={index}>{project}</li>
                  )}
                </ul>
                {/* <Project/> */}
              </div>
              
          </div>
      );
  }

}

const mapStateToProps = (state) => {
  return {
    style: state.projects.style,

  }
}

const mapDispatchToProps = (dispatch) => {
  return {

  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Projects);
