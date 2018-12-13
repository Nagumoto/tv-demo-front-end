import React, { Component } from 'react'
import PropTypes from 'prop-types'

class TVShow extends Component {
    
    static propTypes = {
        name: PropTypes.string.isRequired,
        allowDelete: PropTypes.bool,
        selectHandler: PropTypes.func.isRequired,
        deleteHandler: PropTypes.func
    }

    renderDelete = () => {
        if (this.props.allowDelete) {
            return (
                <button onClick={this.props.deleteHandler} className="delete">-</button>
            )
        }
        
    }

    render = () => {
        return (
                <div>
                    <span>
                    <button onClick={this.props.selectHandler}>{this.props.name}</button>
                    </span>
                    {this.renderDelete()}
                </div>
        )
    }
}

export default TVShow