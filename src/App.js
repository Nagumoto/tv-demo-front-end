import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import './App.css'
import ManagePage from './ManagePage'
import PreviewPage from './PreviewPage'

class App extends Component {

  state = {
    show: {
        name: '',
        rating: '',
        image: ''
    }
}

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
  this.setState({
      show: {
          name: showToSave.name,
          rating: showToSave.rating,
          image: showToSave.image
      },
      nameInProgress: '',
      ratingInProgress: '',
      imageInProgress: ''
  })
}

renderManagePage = () => {
  return (
    <ManagePage show={this.state.show} showDeleted={this.showDeleted} saveTVShow={this.saveTVShow} />
  )
}

renderPreviewPage = () => {
  return (
    <PreviewPage show={this.state.show} />
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
