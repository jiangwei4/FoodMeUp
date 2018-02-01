import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Recettes from './Recettes';
import Card from './Card';

class App extends React.Component{
    state = {
        Recettes
    };
    
    render(){
        const cards = Object
            .keys(this.state.Recettes)
            .map(key => <Card key={key} details={this.state.Recettes[key]}/>);
            console.log(this.state.Recettes);
            return (
           <div className="cards">
           {cards}
           </div>
        )
    }
}

ReactDOM.render(
    <App />,
    document.getElementById('root')
);