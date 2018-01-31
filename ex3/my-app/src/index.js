import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';
import registerServiceWorker from './registerServiceWorker';

/*ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();*/

class App extends React.Component{
    render(){
        return (
            <div>
                <p>c'est parti !!</p>
                <button></button>
                </div>
        )
    }
}

ReactDOM.render(
    <App />,
    document.getElementById('root')
);