import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch, NavLink } from 'react-router-dom';
import './App.css';
import ManagePage from './ManagePage'
import PreviewPage from './PreviewPage'

class App extends Component {

  render = () => {
    return (

      <Router>
        <Fragment>
          <Switch>
            <Route exact path="/" component={ManagePage} />
            <Route path="/ManagePage" component={ManagePage} />
            <Route path="/PreviewPage" component={PreviewPage} />
          </Switch>

          <NavLink exact to={'/ManagePage'}
            activeClassName='active' />

          <NavLink exact to={'/PreviewPage'}
            activeClassName='active' />

        </Fragment>
      </Router>

    )
  }
}

export default App
