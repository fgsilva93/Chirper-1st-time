import React, { Component } from 'react'

export class TimeLine extends Component {

    getStyle() {
        return {
            background: 'lightgray',
            marginBottom: '10px',
            border: '1px solid gray'
        }
    }

    render() {
        return (
            <div style = { this.getStyle() }>
            <h3>{ this.props.chip2.userName}</h3>
            <p>{ this.props.chip2.message }</p>
            </div>
        )
    }
}

export default TimeLine
