import React, { Component } from 'react'
import TimeLine from './TimeLine';
export class Chirper extends Component {
    render() {
        // console.log(this.props.chip.text)
        return this.props.chip.map((chip) => (
            <TimeLine key = { chip.id } chip2 = { chip } />
        ))
    }
}

export default Chirper
