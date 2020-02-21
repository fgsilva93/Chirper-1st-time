import React, { Component } from 'react'

export class TimeLine extends Component {

    getStyle = () => {
        return{
            background: '#f4f4f4',
            padding: '10px',
            borderBottom: '1px #ccc dotted',
        }
    }
    render() {
        return (
            <div style = { this.getStyle() }>
            <p>{ this.props.chip2.text }</p>
            </div>
        )
    }
}

export default TimeLine
