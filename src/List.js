import React, { Component } from 'react';
import Card from './Card'
import './styles/List.css';

export default class List extends Component {

    render() {
        return (
            <section className="List">
                <header className="List-header">
                    <h2>{this.header}</h2>
                </header>
                <div className="List-cards">
                    {this.props.cards.map((card) =>
                        <Card
                            key={card.id}
                            id={card.id}
                            title={card.title}
                            content={card.content}
                            onClickDelete={this.props.onClickDelete}
                        />
                    )}
                    <button type="button" className="List-add-button" onClick={() => this.props.onClickAdd(this.props.id)}>
                        + Add Random Card
                    </button>
                </div>
            </section>
        )
    }
}

List.defaultProps = {
    onClickAdd: () => {}
}