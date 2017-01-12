import React, { PropTypes } from 'react';
import { BrowserRouter, Match, Link } from 'react-router';
import HomePage from './HomePage.jsx';
import FuelSavingsPage from '../containers/FuelSavingsPage.jsx';
import Resume from './resume/Resume.jsx';
import NotFoundPage from './NotFoundPage.jsx';

class App extends React.Component {
  render () {
    return (
      <BrowserRouter>
        <div>
          <Link to="/">Home</Link>
          {' | '}
          <Link to="/fuel-savings">Demo App</Link>
          {' | '}
          <Link to="/resume">Résumé</Link>
          <br/>
          {this.children}
          <Match exactly pattern="/" component={HomePage}/>
          <Match exactly pattern="/fuel-savings" component={FuelSavingsPage} />
          <Match exactly pattern="/resume" component={Resume} />
          <Match exactly pattern="*" component={NotFoundPage} />
        </div>
      </BrowserRouter>
    );
  }
};

App.propTypes = {
  children: PropTypes.element
};

export default App;
