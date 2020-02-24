import React, { Component } from 'react';
import { Card } from 'react-bootstrap';

export class TimeLine extends Component {

    render() {
        return (
            <Card style={{ width: '500px', marginBottom: '10px' }}>
                <Card.Body style= {{background: 'lightgreen', color: 'green', border: 'solid 2px green'}}>
                    <Card.Title>{ this.props.chip2.userName}</Card.Title> 
                    <Card.Text>{ this.props.chip2.message }</Card.Text>
                </Card.Body>
            </Card>
        )
    }
}

export default TimeLine
