import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Recettes from './Recettes';
import Card from './Card';
import { render } from 'react-dom';

class App extends React.Component{
    state = {
        Recettes
    };
    
    /* AfficherRecette = event => {
        var i = 0;
        //les recettes -> en array
        const KeyArray = Object.keys(Recettes);
        while (i < KeyArray.length) {
            this.setState(Recettes[KeyArray[i]]);
            i ++;    
        };
        
        
    };*/
    
    
    
    
    
    
    
    render(){
        const cards = Object
            .keys(this.state.Recettes)
            .map(key => <Card key={key} details={this.state.Recettes[key]}/>);
        return (
           <div className="box">
  
           <div className="cards">
           {cards}
           </div>
           </div>
        )
    }
}

ReactDOM.render(
    <App />,
    document.getElementById('root')
);