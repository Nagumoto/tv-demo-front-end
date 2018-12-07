import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class SiteNav extends Component {

    render = () => {
        return (
                <h1>
                    <span className="center"><NavLink activeClassName='active' exact to="/">Manage</NavLink></span>
                    <span className="center"><NavLink activeClassName='active' to="/PreviewPage">Preview</NavLink></span>
                </h1>
        )
    }
}

export default SiteNav