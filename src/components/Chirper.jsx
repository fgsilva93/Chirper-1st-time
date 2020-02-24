import React, { Component } from 'react'
import TimeLine from './TimeLine';

export class Chirper extends Component {
    render() {
        return this.props.array.map((chip) => (
            <TimeLine chip2 = { chip } />
        ))
    }
}

export default Chirper

