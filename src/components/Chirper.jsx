import React, { Component } from 'react'
import TimeLine from './TimeLine';

export class Chirper extends Component {

    render() {
        return (
            <div style={{padding: '5px', width: '500px'}}>
                {this.props.array.map((chip, id) => (
                    <TimeLine key={id} chip2={chip} />
                ))}
            </div>
        )
    }
}

export default Chirper

