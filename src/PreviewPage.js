import React, { Component } from 'react'
import PropTypes from 'prop-types'
import SiteNav from './SiteNav'
import TVShow from './TVShow'

class PreviewPage extends Component {

    static propTypes = {
        tvShows: PropTypes.array.isRequired
    }

    state = {
        selectedShow: {
            name: '',
            rating: '',
            image: ''
        }
    }

    showSelected = () => {
        this.setState({
            selectedShow: {
                name: this.props.tvShows.name,
                rating: this.props.show.rating,
                image: this.props.show.image
            }
        })
    }

    renderShows = () => {
        if (this.props.tvShows) {
            return this.props.tvShows
                .filter((tvShow) => {
                    return tvShow.rating < 4
                })
                .map(
                    (tvShow) => (
                        <TVShow name={tvShow.name} key={tvShow.name} selectHandler={this.showSelected} />
                    )
                )
        }
    }

    calculateAvgRating = () => {
        return this.props.tvShows.reduce((sum, tvShow) => {
            return sum + tvShow.rating / this.props.tvShows.length
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
                        <section>Average Rating: {this.calculateAvgRating()}</section>
                        {this.renderShows()}
                    </section>
                    <div id="show-preview">
                        <h3><span>{this.state.selectedShow.name}</span><span>{this.state.selectedShow.rating}</span></h3>
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