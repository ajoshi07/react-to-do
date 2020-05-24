import React from 'react';
import './App.css';

 class App2 extends React.Component
{

    render ()
    {
        return(
            <div className="App2">
            <button value="App 2"className="app2class" onClick={this.props.onClick}></button>
            <p>{this.props.value}</p>
         </div> 
        );
    }
}
export default App2;