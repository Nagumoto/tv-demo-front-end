import React, { Component } from 'react';
import './App.css';
import { Link } from 'react-router-dom';

const clickedShowSelection = () => {
    console.log('Clicked Show Selection')
}

const clickedDelete = () => {
    console.log('Clicked Delete')
}

const clickedCreateUpdate = () => {
    console.log('Clicked Create/Update')
}

const changedShowName = () => {
    console.log('Changed Show Name')
}

class ManagePage extends Component {
    render = () => {
        return (
            <div>
                <nav>
                    <h1>
                        <span className="current">Manage</span> <span><Link to="/PreviewPage/">Preview</Link></span>
                    </h1>
                </nav>
                <div id="main">
                    <section id="show-selection">
                        <h2>Shows</h2>
                        <div><span><button onClick={clickedShowSelection}>The Guild</button></span><button className="delete" onClick={clickedDelete}>-</button></div>
                        <div><span><button onClick={clickedShowSelection}>RWBY</button></span><button className="delete" onClick={clickedDelete}>-</button></div>
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
                                    <input id="name" onChange={changedShowName} type="text" placeholder="Show Name" /><br />
                                    <input type="text" placeholder="Between 1 (Family Friendly) - 5 (Viewer Discretion Advised)" /><br />
                                    <input type="text" placeholder="URL of show preview image" /><br />
                                    <span id="create-update">
                                        <input type="submit" value="Create/Update" onClick={clickedCreateUpdate} />
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