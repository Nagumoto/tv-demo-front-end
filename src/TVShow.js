import React, { Component } from 'react'
import PropTypes from 'prop-types'

class TVShow extends Component {
    
    static propTypes = {
        name: PropTypes.string.isRequired,
        index: PropTypes.number.isRequired,
        allowDelete: PropTypes.bool,
        selectHandler: PropTypes.func.isRequired,
        deleteHandler: PropTypes.func
    }

    deleteHandler = (e) => {
        e.preventDefault()
        this.props.deleteHandler(this.props.index)
    }

    selectHandler = () => {
        this.props.selectHandler(this.props.show._id)
    }

    renderDelete = () => {
        if (this.props.allowDelete) {
            return (
                <button onClick={this.deleteHandler} className="delete">-</button>
            )
        }
    }

    render = () => {
        return (
                <div>
                    <span>
                    <button onClick={this.selectHandler}>{this.props.name}</button>
                    </span>
                    {this.renderDelete()}
                </div>
        )
    }
}

export default TVShow