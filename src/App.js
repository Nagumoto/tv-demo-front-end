import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import './App.css'
import ManagePage from './ManagePage'
import PreviewPage from './PreviewPage'

class App extends Component {

renderManagePage = () => {
  return (
    <ManagePage />
  )
}

renderPreviewPage = () => {
  return (
    <PreviewPage />
  )
}

  render = () => {
    return (

      <Router>
        <Switch>
          <Route exact path="/" component={this.renderManagePage} />
          <Route path="/PreviewPage" component={this.renderPreviewPage} />
        </Switch>
      </Router>

    )
  }
}

export default App
