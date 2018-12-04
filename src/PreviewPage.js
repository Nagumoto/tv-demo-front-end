import React, { Component } from 'react';
import SiteNav from './SiteNav'

class PreviewPage extends Component {
    clickedShowSelection = () => {
        console.log('Clicked Show Selection')
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
                        <div><span><button onClick={this.clickedShowSelection}>The Guild</button></span></div>
                        <div><span><button onClick={this.clickedShowSelection}>RWBY</button></span></div>
                    </section>
                    <div id="show-preview">
                        <h3><span>The Guild</span><span>3</span></h3>
                        <div className="center">
                            <img src="http://pop-verse.com/wp-content/uploads/2013/02/theguild.jpg" alt="The cast of The Guild in costume" />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default PreviewPage