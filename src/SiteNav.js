import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class SiteNav extends Component {

    render() {
        return (
                <h1>
                    <span className="center"><NavLink to="/ManagePage">Manage</NavLink></span>
                    <span className="center"><NavLink to="/PreviewPage">Preview</NavLink></span>
                </h1>
        )
    }
}

export default SiteNav