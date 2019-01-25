import React, { Component } from 'react'
import SiteNav from './SiteNav'
import TVShow from './TVShow'

class ManagePage extends Component {

    state = {
        showInProgress: {
            name: 'The Guild',
            rating: '3',
            image: 'http://pop-verse.com/wp-content/uploads/2013/02/theguild.jpg'
        },
        tvShows: []
    }

    componentDidMount() {
        fetch('http://localhost:4000/shows/')
            .then(res => res.json())
            .then(tvShows => this.setState({tvShows}, () => {
                console.log('Shows fetched...', this.state.tvShows)
            }))
    }

    showSelected = () => {
        console.log('tvShowSelected')
        console.log(this.props.tvShows.name)
        console.log(this.props.tvShows.rating)
        console.log(this.props.tvShows.image)
        this.setState({
            name: this.props.tvShows.name,
            rating: this.props.tvShows.rating,
            image: this.props.tvShows.image
        })
    }

    showDeleted = () => {
        console.log('tvShowDeleted')
        this.props.showDeleted()
    }

    postTVShow = (e) => {
        e.preventDefault()
        fetch('http://localhost:4000/shows/', {
            method: 'POST',
            body: JSON.stringify(this.state.showInProgress),
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(res => res.json())
            .then(res => console.log('Success:', JSON.stringify(res)))
            .catch(error => console.error('Error:', error))
        fetch('http://localhost:4000/shows/', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(res => res.json())
            .then(tvShows => this.setState({tvShows}))
            .catch(error => console.error('Error:', error))
        /*        this.setState({
                    name: '',
                    rating: '',
                    image: ''
                })*/
    }

    changedName = (e) => {
        console.log(e.target.value)
        this.setState({ showInProgress: {name: e.target.value }})
    }

    changedRating = (e) => {
        console.log(e.target.value)
        this.setState({ showInProgress: {rating: e.target.value }})
    }

    changedimage = (e) => {
        console.log(e.target.value)
        this.setState({ showInProgress: {image: e.target.value }})
    }

    renderShows = () => {
        if (this.state.tvShows) {
            console.log(this.state.tvShows)
            return this.state.tvShows.map(
                (tvShow) => (
                    <TVShow name={tvShow.name} key={tvShow.name} allowDelete={true} selectHandler={this.showSelected} deleteHandler={this.showDeleted} />
                )
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
                                    <input onChange={this.changedName} value={this.state.showInProgress.name} /><br />
                                    <input onChange={this.changedRating} value={this.state.showInProgress.rating} /><br />
                                    <input onChange={this.changedimage} value={this.state.showInProgress.image} /><br />
                                    <span id="create-update">
                                        <button onClick={this.postTVShow}>Create/Update</button>
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