import React, { Component } from 'react';
import { connect } from 'react-redux';
import "./Projects.css"
class Projects extends Component {
  componentDidMount() {
    //Render the projects and fetch the data here via axios
    console.log(this.props.style.top);
  }

  render() {
      return (
          <div className="Projects" style={this.props.style}>
              <h1>Loaded Projects</h1>
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
