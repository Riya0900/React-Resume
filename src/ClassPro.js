import './App.css';
import React from 'react';

class ClassPro extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      Projects: [
        { Title: "Tic Tac Toe Game Implementation", Language: "Python" , Description: "This Tic Tac Toe GUI with Python is for two players, when both players are human or when one is a computer.", Github: "https://github.com/aqeelanwar/Tic-Tac-Toe" }, 
        { Title: "Blog Implementation", Language: "Php with Laravel" , Description: "A user registration system that manages two types of users: Admin and Normal Users.", Github: "https://github.com/elshobokshy/Blog-PHP-OOP.git" }
      ]
    };
  }

  render(){
    return (
      <>
      <div className="App-main">
        <b><p className="para1">Project Work:</p></b>
            {this.state.Projects.map((pr) => {
              return(
                <p className="para2"><font color="#f7f45a">Title: </font> {pr.Title} using <i>{pr.Language}</i><br/><font color="#f7f45a"> Description:</font> {pr.Description} <br/><a href={pr.Github} className="App-link">Github Link</a><hr/></p>
              )
            })}
        </div>
      </>
    );
  }
}

export default ClassPro;