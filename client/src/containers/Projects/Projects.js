import React, { Component } from 'react';
import { connect } from 'react-redux';
import "./Projects.css";
import Project from "../../components/Project/Project";

class Projects extends Component {

  state = {
    projects: [],
  }
  
  componentDidMount() {
    //Render the projects and fetch the data here via axios
    // Todo: Load Projects here via api call to github or database
    const projects = []
    for(var i=0; i<10; i++){
      projects.push(<Project/>);
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
