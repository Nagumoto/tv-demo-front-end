import React, { Component } from 'react'
import PropTypes from 'prop-types'
import SiteNav from './SiteNav'
import TVShow from './TVShow'

class PreviewPage extends Component {

    static propTypes = {
        show: PropTypes.object.isRequired
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
                name: this.props.show.name,
                rating: this.props.show.rating,
                image: this.props.show.image
            }
        })
    }

    renderShows = () => {
        if (this.props.show.name) {
            return (
                <TVShow name={this.props.show.name} selectHandler={this.showSelected} />
            )
        }
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