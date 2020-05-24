import React from 'react';
import logo from './logo.svg';
import './App.css';
import App1 from './App1';
import App2 from './App2';



class App extends React.Component
{
  
  constructor (props)
  {
        super(props);
        this.state={ value:'hello'};

  }
  handleState(){
         this.setState({value:'hello Props!'});
  }
  render ()
  {
    return (
      <div className="App">
        <header className="App-header">
        <div className="first">
         <App1 value={this.state.value} onClick={()=>this.handleState()}></App1>     
         </div>
         <div className="second">
         <App2 value={this.state.value} onClick={()=>this.handleState()}></App2>   
         </div>
        </header>
      </div>
    );

  }
}

class Square extends React.Component
{
  constructor(props)
  {
    super(props);
    this.state={ value:null};

  }

  changeState()
  {
    this.setState({value:"X"})

  }

  render() {
     return(
       <div>
       <div className="board-row">
         <button className="b" onClick={()=>{this.changeState()}}>{this.state.value}</button> 
         <button className="b" onClick={()=>{this.changeState()}}>{this.state.value}</button> 
         <button className="b" onClick={()=>{this.changeState()}}>{this.state.value}</button>  
       </div>
       <div className="board-row">
         <button className="b" onClick={()=>{this.changeState()}}>{this.state.value}</button> 
         <button className="b" onClick={()=>{this.changeState()}}>{this.state.value}</button>  
         <button className="b" onClick={()=>{this.changeState()}}>{this.state.value}</button>  
       </div>
       <div className="board-row">
         <button className="b" onClick={()=>{this.changeState()}}>{this.state.value}</button> 
         <button className="b" onClick={()=>{this.changeState()}}>{this.state.value}</button>  
         <button className="b" onClick={()=>{this.changeState()}}>{this.state.value}</button> 
       </div>
      </div>
     );
  }
}


export default App;
