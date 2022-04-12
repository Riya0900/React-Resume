import logo from './logo.png';
import React from "react";
import './App.css';

class ClassMain extends React.Component {
  constructor(props){
    super(props);
    this.state={
      color: "black"
    };
  }
  componentDidMount(){
    setTimeout(()=>{
      this.setState({color:"rgb(255, 89, 89)"});
    },5000);
  }
  render() {
    return (
      <>
        <header className="App-header">
            <div className="App-content">
                <img src={logo} className="App-logo" alt="logo" />
                <b><h1 style={{color: this.state.color}}>My Resume</h1></b>
            </div>
        </header>
      </>
    );
  }
}

export default ClassMain;