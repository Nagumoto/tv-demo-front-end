import React, { Component } from 'react'
import PropTypes from 'prop-types'
import SiteNav from './SiteNav'
import TVShow from './TVShow'

class ManagePage extends Component {

    static propTypes = {
        tvShows: PropTypes.array.isRequired,
        showDeleted: PropTypes.func.isRequired,
        saveTVShow: PropTypes.func.isRequired
    }

    state = {
        nameInProgress: 'The Guild',
        ratingInProgress: '3',
        imageInProgress: 'http://pop-verse.com/wp-content/uploads/2013/02/theguild.jpg'
    }

    showSelected = () => {
        console.log('tvShowSelected')
        this.setState({
            nameInProgress: this.props.show.name,
            ratingInProgress: this.props.show.rating,
            imageInProgress: this.props.show.image
        })
    }

    showDeleted = () => {
        console.log('tvShowDeleted')
        this.props.showDeleted()
    }

    saveTVShow = (e) => {
        e.preventDefault()
        this.props.saveTVShow({
            name: this.state.nameInProgress,
            rating: this.state.ratingInProgress,
            image: this.state.imageInProgress
        }
        )
        this.setState({
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
        if (this.props.tvShows) {
            let tvShowElements = []
            for (let i=0; i < this.props.tvShows.length; i++) {
                tvShowElements.push(<TVShow name={this.props.tvShows[i].name} key={this.props.tvShows[i].name} allowDelete={true} selectHandler={this.showSelected} deleteHandler={this.showDeleted} />)                
            }
            return (
                tvShowElements
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