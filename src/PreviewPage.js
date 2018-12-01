import React, { Component } from 'react';
import 'tv-demo-front-end.css';

const clickedShowSelection = () => {
    console.log('Clicked Show Selection')
}

class PreviewPage extends Component {
    render = () => {
        return (
            <div>
                <nav>
                    <h1>
                        <span><a href="file:///Users/neilsmadsen/projects/tv-demo-front-end/manage.html">Manage</a></span> <span class="current">Preview</span>
                    </h1>
                </nav>
                <div>
                    <section id="show-selection">
                        <h2>Shows</h2>
                        <div><span><button onclick="clickedShowSelection()">The Guild</button></span></div>
                        <div><span><button onclick="clickedShowSelection()">RWBY</button></span></div>
                    </section>
                    <div id="show-preview">
                        <h3><span>The Guild</span><span>3</span></h3>
                        <div class="center">
                            <img src="http://pop-verse.com/wp-content/uploads/2013/02/theguild.jpg" />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default PreviewPage;