import React from 'React';
import Item from './Item';

class Card extends React.Component{
    renderIngredients =(ingredients) => { return ingredients.split(',').map(ingredients => `<li>${ingredients}</li>`);
};

render() {
    const ingredients = this.porps.details.ingredients.split(',').map((item,index) => <Item key={index} item={item} />);
    const instructions = this.porps.details.instructions.split('\n').map((item,index) => <Item key={index} item={item} />);
    
    return (
        <div className="card">
        <div className="image">
        <img src={this.props.detials.image} alt="" />
        </div>
        <div className="recette">
        <h2>{this.props.details.name}</h2>
        <ul className="liste-ingredients">
        {ingredients}
        </ul>
        <ol className="liste-instructions">
        {instructions}
        </ol>
        </div>
        </div>
    )
}
}

export default Card;
