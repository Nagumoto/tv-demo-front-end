import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import './App.css'
import ManagePage from './ManagePage'
import PreviewPage from './PreviewPage'

class App extends Component {

showDeleted = () => {
  console.log('tvShowDeleted')
  this.setState({
      show: {
          name: '',
          rating: '',
          image: ''
      }
  })
}

saveTVShow = (showToSave) => {
  this.setState((prevState) => {
    return {
      tvShows:[...prevState.tvShows, showToSave]
    }
  })
  console.log(showToSave)
}

renderManagePage = () => {
  return (
    <ManagePage />
  )
}

renderPreviewPage = () => {
  return (
    <PreviewPage tvShows={this.state.tvShows} />
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
