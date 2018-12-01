import React, { Component } from 'react';
import 'tv-demo-front-end.css'

const clickedShowSelection = () => {
    console.log('Clicked Show Selection')
}

const clickedDelete = () => {
    console.log('Clicked Delete')
}

const clickedCreateUpdate = () => {
    console.log('Clicked Create/Update')
}

class ManagePage extends Component {
    render = () => {
        return (
            <div>
                <nav>
                    <h1>
                        <span class="current">Manage</span> <span><a href="file:///Users/neilsmadsen/projects/tv-demo-front-end/preview.html">Preview</a></span>
                    </h1>
                </nav>
                <div>
                    <section id="show-selection">
                        <h2>Shows</h2>
                        <div><span><button onclick="clickedShowSelection()">The Guild</button></span><button onclick="clickedDelete()">-</button></div>
                        <div><span><button onclick="clickedShowSelection()">RWBY</button></span><button onclick="clickedDelete()">-</button></div>
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
                                    <input id="name" onchange="changedShowName()" type="text" placeholder="Show Name" /><br />
                                    <input type="text" placeholder="Between 1 (Family Friendly) - 5 (Viewer Discretion Advised)" /><br />
                                    <input type="text" placeholder="URL of show preview image" /><br />
                                    <span id="create-update">
                                        <input type="submit" value="Create/Update" onclick="clickedCreateUpdate()" />
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