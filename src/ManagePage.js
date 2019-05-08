import React, { Component } from 'react'
import SiteNav from './SiteNav'
import TVShow from './TVShow'

class ManagePage extends Component {

    state = {
        showInProgress: {
            name: '',
            rating: '',
            image: ''
        },
        showDeleted: '',
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
        } catch (err) {
            console.log(err)
        }
    }

    showSelected = (show) => {
        this.setState({
            showInProgress: {
                name: show.name,
                rating: show.rating,
                image: show.image
            }
        })
    }

    showDeleted = async (index) => {
        console.log('tvShowDeleted')
        const id = this.state.tvShows[index]._id
        try {
            await fetch('https://evening-eyrie-81867.herokuapp.com/shows/' + id, {
            // await fetch('http://localhost:4000/shows/' + id, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                    'Mode': 'CORS'
                }
            })
            this.setState({
                showDeleted: this.state.tvShows[index].name
            })
        } catch (err) {
            console.log(err)
        }
        this.componentDidMount()
    }

    saveTVShow = (e) => {
        e.preventDefault()
        const show = this.state.tvShows.filter((tvShow) => tvShow.name === this.state.showInProgress.name)
        if (show.length === 0) this.postTVShow()
        else this.putTVShow(show[0])
    }

    putTVShow = async (show) => {
        try {
            await fetch('https://evening-eyrie-81867.herokuapp.com/shows/' + show._id, {
            // await fetch('http://localhost:4000/shows/' + show._id, {
                method: 'PUT',
                body: JSON.stringify(this.state.showInProgress),
                headers: {
                    'Content-Type': 'application/json',
                    'Mode': 'CORS'
                }
            })
            alert(show.name + ' Updated')
        } catch (err) {
            console.log(err)
        }
        this.componentDidMount()
    }

    postTVShow = async () => {
        try {
            await fetch('https://evening-eyrie-81867.herokuapp.com/shows/', {
            // await fetch('http://localhost:4000/shows/', {

                method: 'POST',
                body: JSON.stringify(this.state.showInProgress),
                headers: {
                    'Content-Type': 'application/json',
                    'Mode': 'CORS'
                }
            })
        } catch (err) {
            console.log(err)
        }
        this.componentDidMount()
    }

    changedName = (e) => {
        console.log(e.target.value)
        let showInProgress = Object.assign({}, this.state.showInProgress)
        showInProgress.name = e.target.value
        this.setState({ showInProgress })
    }

    changedRating = (e) => {
        console.log(e.target.value)
        let showInProgress = Object.assign({}, this.state.showInProgress)
        showInProgress.rating = e.target.value
        this.setState({ showInProgress })
    }

    changedimage = (e) => {
        console.log(e.target.value)
        let showInProgress = Object.assign({}, this.state.showInProgress)
        showInProgress.image = e.target.value
        this.setState({ showInProgress })
    }

    renderShows = () => {
        if (this.state.tvShows) {
            return this.state.tvShows.map(
                (tvShow, index) => (
                    <TVShow name={tvShow.name} show={tvShow} index={index} key={tvShow._id} allowDelete={true} selectHandler={this.showSelected} deleteHandler={this.showDeleted} />
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
                                    <select value={this.state.showInProgress.rating} onChange={this.changedRating}>
                                        <option>{1}</option>
                                        <option>{2}</option>
                                        <option>{3}</option>
                                        <option>{4}</option>
                                        <option>{5}</option>
                                    </select><br />
                                    <input onChange={this.changedimage} value={this.state.showInProgress.image} /><br />
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