import React, { Component } from 'react'
import SiteNav from './SiteNav'
import TVShow from './TVShow'

class PreviewPage extends Component {

    state = {
        selectedShow: {
            name: '',
            rating: '',
            image: ''
        },
        filter: true,
        tvShows: []
    }

    componentDidMount = async () => {
        try {
            const res = await fetch('https://evening-eyrie-81867.herokuapp.com/shows/')
            // const res = await fetch('http://localhost:4000/shows/')
            const tvShows = await res.json()
            this.setState({ tvShows }, () => {
                console.log('Shows fetched...', this.state.tvShows)
            })
            this.setState({
                selectedShow: this.state.tvShows[0]
            })
        } catch (err) {
            console.log(err)
        }
    }

    filterButton = () => {
        const filter = this.state.filter
        return filter ? 'On' : 'Off'
    }

    filterChange = () => {
        this.setState({ filter: !this.state.filter })
    }

    showSelected = (id) => {
        const show = this.state.tvShows.filter((show) => show._id === id)[0]
        this.setState({
            selectedShow: {
                name: show.name,
                rating: show.rating,
                image: show.image
            }
        })
    }

    renderShows = () => {
        if (this.state.filter) {
            return this.state.tvShows
                .filter((tvShow) => {
                    return tvShow.rating < 4
                })
                .map((tvShow, index) => (
                    <TVShow name={tvShow.name} show={tvShow} index={index} key={tvShow._id} selectHandler={this.showSelected} />
                )
                )
        } else {
            return this.state.tvShows.map((tvShow, index) => (
                <TVShow name={tvShow.name} show={tvShow} index={index} key={tvShow._id} selectHandler={this.showSelected} />
            )
            )
        }
    }

    calculateAvgRating = () => {
        return this.state.tvShows.reduce((sum, tvShow) => {
            return sum + tvShow.rating / this.state.tvShows.length
        }, 0)
    }

    renderImage = () => {
        if (this.state.selectedShow.image) {
            return (
                <img src={this.state.selectedShow.image} alt="A preview of the selected show." />
            )
        }
    }

    render = () => {
        return (
            <div>
                <nav>
                    <SiteNav />
                </nav>
                <div>
                    <section id="show-selection">
                        <h2>Shows</h2>
                        <section>Safety Filter: <button onClick={this.filterChange} >{this.filterButton()}</button></section>
                        <section>Average Rating: {this.calculateAvgRating()}</section>
                        {this.renderShows()}
                    </section>
                    <div id="show-preview">
                        <h3><span>Show: {this.state.selectedShow.name}</span><span>Rating: {this.state.selectedShow.rating}</span></h3>
                        <div className="center">
                            {this.renderImage()}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default PreviewPage