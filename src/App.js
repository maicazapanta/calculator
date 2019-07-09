import React from 'react';
import logo from './logo.svg';
import './App.css';
import ResultComponent from './Components/ResultComponent';
import KeyPadComponent from "./Components/KeyPadComponent";

class App extends React.Component {
  constructor(){
      super();

      this.state = {
          result: ""
      }
  }

  onClick = button =>{

    if(button === "="){
      this.handlesCalculate()
    }

    else if(button === "C")
    {
      this.handlesReset()
    }

    else if(button === "CE"){
      this.handlesBackspace()
    }

    else{
      this.setState({
        result: this.state.result + button
      })
    }
  };

  handlesCalculate = () =>{
    try{
      this.setState({
        result: (eval(this.state.result) || "") + ""

      })
    }catch(e){
      this.setState({
        result: "error"
        
      })
    }
  };
  handlesReset = () => {
    this.setState({
      result: ""
    })
  };

  handlesBackspace = () =>{
    this.setState({
      result: this.state.slice(0, -1)
    })
  };



  render() {
      return (
          <div>
              <div className="calculator-body">
                  <h1>Simple Calculator</h1>
                  <ResultComponent result={this.state.result}/>
                  <KeyPadComponent onClick={this.onClick}/>
              </div>
          </div>
      );
  }
}

export default App;



