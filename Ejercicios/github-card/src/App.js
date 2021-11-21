import React from "react";
import "./App.css"
class Card extends React.Component{
  render(){
    return(
      <div className="github-profile">
        <img src="https://via.placeholder.com/75" alt="only for fill purposes"/>
        <div className="info">
          <div className="name">Name here....</div>
          <div className="company">Company here...</div>
        </div>
      </div>
    )
  }
}

class App extends React.Component{
  render(){
    return (
      <div>
        <div className = "header">
          <h1>{this.props.title}</h1>
        </div>
        <Card />
      </div>
    )
  }
}

export default App;
