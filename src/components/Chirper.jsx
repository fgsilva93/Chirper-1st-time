import React, { Component } from 'react'
import TimeLine from './TimeLine';

export class Chirper extends Component {

    getStyle() {
        return {
            padding: '5px',
            width: '500px'
        }
    }

    render() {
        return (
            <div style = { this.getStyle() }>
            {this.props.array.map((chip) => (
            <TimeLine key = { chip.id } chip2 = { chip } />
            ))}
            </div>
        )
    }
}

export default Chirper

