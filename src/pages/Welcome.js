import React from 'react';

// React-Router-DOM
import { Route } from 'react-router-dom';

const Welcome = () => {
  return (
    <section>
      <h1>Welcome Page</h1>
      <p>Here is welcome page</p>

      {/* React-Router-DOM */}
      {/* Loading-Specific-Path-Content */}
      {/* Here you can load the content of the welcome page if the  */}
      {/* /welcome/new-user got clicked */}
      <Route path="/welcome/new-user">
        <p>Welcome, new user!</p>
      </Route>
    </section>
  );
};

export default Welcome;