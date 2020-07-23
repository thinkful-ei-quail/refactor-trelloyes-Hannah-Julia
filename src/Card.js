import React, { Component } from 'react';
import './styles/Card.css';

export default class Card extends Component {
    render() {
        return (
            <div className="Card">
                <button type="button" onClick={() => this.props.onClickDelete(this.props.id)}>delete</button>                     
                <h3>{this.props.title}</h3>
                <p>{this.props.content}</p>
            </div>
        )
    }
}