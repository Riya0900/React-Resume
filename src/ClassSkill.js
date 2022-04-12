import React from "react";
import './App.css';

class ClassSkill extends React.Component {
  constructor(props){
    super(props);
    this.state={
      CodingSkills:
        ['C','Java','Python','HTML','CSS','SQL'],
      TechnicalSkills :
        ['Strong knowledge of Mathematics, Data-Structures and Algorithms', "Special interest in Web Development, Machine Learning and Artificial Intelligency"]
    };
  }
  render() {
    return (
      <>
      <div className="App-main">
        <b><p className="para1">Skills:</p></b>
          <p className="para2">Programming Languages<br/></p>
            {this.state.CodingSkills.map((cs) => {
              return(
                <table align="center" className="table2">
                  <tr>
                    <td>{cs}</td>
                  </tr>
                </table>
              )
            })}
            {this.state.TechnicalSkills.map((ts) => {
              return(
                <p className="para2">{ts}</p>
              )
            })}
      </div>
      <hr />
      </>
    );
  }
}

export default ClassSkill;