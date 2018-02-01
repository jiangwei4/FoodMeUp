import React from 'react';

class Card extends React.Component{

e
render() {

 //   const ingredients = this.ingredients;//.split(',');//.map((Item,index) => <Item key={index} Item={Item} />);
 //  const instructions = this.instructions;//.split('\n');//.map(tem,index) => <Item key={index} Item={Item} />);

    return (
        <div className="card">
        <div className="image">
        </div>
        <div className="recette">
        <h2>{this.props.details.name}</h2>
        <img src={this.props.details.image} alt=""/>
        <ul className="liste-ingredients">
        {this.props.details.ingredients}
        </ul>
        <ol className="liste-instructions">
        {this.props.details.instructions}
        </ol>
        </div>
        </div>
    )
}
}

export default Card;
