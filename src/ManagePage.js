import React, { Component } from 'react'
import SiteNav from './SiteNav'
import TVShow from './TVShow'

class ManagePage extends Component {

    state = {
        nameInProgress: 'The Guild',
        ratingInProgress: '3',
        imageInProgress: 'An image URL',
        show: {
            name: '',
            rating: '',
            image: ''
        }
    }

    showSelected = () => {
        console.log('tvShowSelected')
        this.setState({
            nameInProgress: this.state.show.name,
            ratingInProgress: this.state.show.rating,
            imageInProgress: this.state.show.image
        })
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

    saveTVShow = (e) => {
        e.preventDefault()
        this.setState({
            show: {
                name: this.state.nameInProgress,
                rating: this.state.ratingInProgress,
                image: this.state.imageInProgress
            },
            nameInProgress: '',
            ratingInProgress: '',
            imageInProgress: ''
        })
    }

    changedName = (e) => {
        console.log(e.target.value)
        this.setState({ nameInProgress: e.target.value })
    }

    changedRating = (e) => {
        console.log(e.target.value)
        this.setState({ ratingInProgress: e.target.value })
    }

    changedimage = (e) => {
        console.log(e.target.value)
        this.setState({ imageInProgress: e.target.value })
    }

    renderShows = () => {
        if (this.state.show.name) {
            return (
                <TVShow name={this.state.show.name} allowDelete={true} selectHandler={this.showSelected} deleteHandler={this.showDeleted} />
            )
        }
    }

    render = () => {
        return (
            <div>
                <nav>
                    <SiteNav />
                </nav>
                <div id="main">
                    <section id="show-selection">
                        <h2>Shows</h2>
                        {this.renderShows()}
                    </section>
                    <form id="show-details">
                        <div>
                            <h3>New/Edit Show</h3>
                            <div id="details-form">
                                <div>
                                    Name :<br />
                                    Rating :<br />
                                    Image URL :
                                </div>
                                <div>
                                    <input onChange={this.changedName} value={this.state.nameInProgress} /><br />
                                    <input onChange={this.changedRating} value={this.state.ratingInProgress} /><br />
                                    <input onChange={this.changedimage} value={this.state.imageInProgress} /><br />
                                    <span id="create-update">
                                        <button onClick={this.saveTVShow}>Create/Update</button>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}

export default ManagePage;