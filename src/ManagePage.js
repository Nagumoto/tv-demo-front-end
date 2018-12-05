import React, { Component } from 'react'
import SiteNav from './SiteNav'
import TVShow from './TVShow'

class ManagePage extends Component {
    tvShowSelected = () => {
        console.log('tvShowSelected')
    }

    tvShowDeleted = () => {
        console.log('tvShowDeleted')
    }

    saveTVShow = () => {
        console.log('saveTVShow')
    }

    changedShowName = () => {
        console.log('changedShowName')
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
                        <TVShow selectHandler={this.tvShowSelected} deleteHandler={this.tvShowDeleted} name="The Guild" allowDelete={true} />
                        <TVShow selectHandler={this.tvShowSelected} deleteHandler={this.tvShowDeleted} name="RWBY" allowDelete={true} />
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
                                    <input id="name" onChange={this.changedShowName} type="text" placeholder="Show Name" /><br />
                                    <input type="text" placeholder="Between 1 (Family Friendly) - 5 (Viewer Discretion Advised)" /><br />
                                    <input type="text" placeholder="URL of show preview image" /><br />
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