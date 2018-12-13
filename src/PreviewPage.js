import React, { Component } from 'react'
import SiteNav from './SiteNav'
import TVShow from './TVShow'

class PreviewPage extends Component {
    
    ShowSelected = () => {
        console.log('ShowSelected')
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
                        <TVShow selectHandler={this.ShowSelected} name="The Guild" />
                        <TVShow selectHandler={this.ShowSelected} name="RWBY" />
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