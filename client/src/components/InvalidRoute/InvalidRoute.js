import React from 'react';
import {Redirect} from 'react-router-dom';
const InvalidRoute = () => (
  <div>
    <h1
      style={{
        color: 'white',
        marginTop: 0,
        paddingTop: '20px',
        height: '100vh',
      }}
    >
      <Redirect push to="/"/>
    </h1>
  </div>
);

export default InvalidRoute;
