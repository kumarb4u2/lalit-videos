import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { HomeContainer, UploadContainer } from './containers';
import { Header } from './components';

const Routes = () => (
  <Router>
    <div>
      <Header />
      <Route exact path="/" component={HomeContainer} />
      <Route exact path="/upload" component={UploadContainer} />
    </div>
  </Router>
);

export default Routes;
