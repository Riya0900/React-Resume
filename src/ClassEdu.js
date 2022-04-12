import './App.css';
import React from 'react';

class ClassEdu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      Qualification: [
        { Qualification: "B.Tech in Computer Science", Year: "2018-Cont.", Institute: "L.J.Institute of Engineering and Technology  (GTU)" , Percentage:"9.93 CGPA & 9.73 CPI"}, 
        { Qualification: "H.S.C", Year: "2017-2018", Institute: "GSEB" , Percentage:"86.67%" },
        { Qualification: "S.S.C", Year: "2015-2016", Institute: "GSEB" , Percentage:"92.16%" }
      ]
    };
  }

  render(){
    return (
      <>
      <div className="App-main">
      <b><p className="para1">Educational Qualification:</p></b>
      <table className="table1" align="center">
        <tr>
          <th>Qualification</th>
          <th>Year</th>
          <th>Institute/Board</th>
          <th>Percentage</th>
        </tr>
        {this.state.Qualification.map((q) => {
        return(
          <tr>
            <td><b>{q.Qualification}</b></td>
            <td>{q.Year}</td>
            <td>{q.Institute}</td>
            <td><b>{q.Percentage}</b></td>
          </tr>
        );
        })}
      </table>
      </div>
      <hr/>
      </>
    );
  }
}

export default ClassEdu;