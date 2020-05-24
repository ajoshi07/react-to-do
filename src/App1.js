import React from 'react';
import './App.css';

class App1 extends React.Component
{

    render ()
    {
        return(
         <div className="App1">
            <button name ="App1" className="app1class" onClick={this.props.onClick}></button>
            <p>{this.props.value}</p>
         </div>   
        );
    }
}
export default App1;