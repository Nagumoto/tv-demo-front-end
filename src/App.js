import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import './App.css'
import ManagePage from './ManagePage'
import PreviewPage from './PreviewPage'

class App extends Component {

  render = () => {
    return (

      <Router>
        <Switch>
          <Route exact path="/" component={ManagePage} />
          <Route path="/PreviewPage" component={PreviewPage} />
        </Switch>
      </Router>

    )
  }
}

export default App
