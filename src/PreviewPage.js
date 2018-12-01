import React, { Component } from 'react';
import './App.css';
import { Link } from 'react-router-dom';

const clickedShowSelection = () => {
    console.log('Clicked Show Selection')
}

class PreviewPage extends Component {
    render = () => {
        return (
            <div>
                <nav>
                    <h1>
                        <span><Link to="/ManagePage/">Manage</Link></span> <span class="current">Preview</span>
                    </h1>
                </nav>
                <div id="main">
                    <section id="show-selection">
                        <h2>Shows</h2>
                        <div><span><button onClick={clickedShowSelection}>The Guild</button></span></div>
                        <div><span><button onClick={clickedShowSelection}>RWBY</button></span></div>
                    </section>
                    <div id="show-preview">
                        <h3><span>The Guild</span><span>3</span></h3>
                        <div class="center">
                            <img src="http://pop-verse.com/wp-content/uploads/2013/02/theguild.jpg" alt="The cast of The Guild in costume."/>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default PreviewPage;