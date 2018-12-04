import React, { Component } from 'react';
import SiteNav from './SiteNav';

class ManagePage extends Component {
    clickedShowSelection = () => { console.log('Clicked Show Selection') }

    clickedDelete = () => {
        console.log('Clicked Delete')
    }

    clickedCreateUpdate = () => {
        console.log('Clicked Create/Update')
    }

    changedShowName = () => {
        console.log('Changed Show Name')
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
                        <div><span><button onClick={this.clickedShowSelection}>The Guild</button></span><button className="delete" onClick={this.clickedDelete}>-</button></div>
                        <div><span><button onClick={this.clickedShowSelection}>RWBY</button></span><button className="delete" onClick={this.clickedDelete}>-</button></div>
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
                                        <input type="submit" value="Create/Update" onClick={this.clickedCreateUpdate} />
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