import './App.css';

import React, { useState } from "react";
import FunIntro from "./FunIntro";
import FunObj from "./FunObj";
import ClassEdu from "./ClassEdu";
import ClassExp from "./ClassExp";
import ClassPro from "./ClassPro";
import ClassSkill from "./ClassSkill";
import FunAbi from "./FunAbi";
import FunAch from "./FunAch";
import ClassMain from "./ClassMain";

export default function App() {
  const [funCompo2, setFunCompo2] = useState(false);
  const [classCompo1, setClassCompo1] = useState(false);
  const [classCompo2, setClassCompo2] = useState(false);
  const [classCompo3, setClassCompo3] = useState(false);
  const [classCompo4, setClassCompo4] = useState(false);
  const [funCompo3, setFunCompo3] = useState(false);
  const [funCompo4, setFunCompo4] = useState(false);

return (
  <>
    <div className="App">
      <div className="nav">
        <ClassMain/>
          <ul>
            <li><a>Introduction</a></li>
            <li><a onClick={() => {setFunCompo2(!funCompo2);}}>Objective</a></li>
            <li><a onClick={() => {setClassCompo1(!classCompo1);}}>Educational Qualification</a></li>
            <li><a onClick={() => {setClassCompo2(!classCompo2);}}>Relavant Experience</a></li>
            <li><a onClick={() => {setClassCompo3(!classCompo3);}}>Project Work</a></li>
            <li><a onClick={() => {setClassCompo4(!classCompo4);}}>Skills</a></li>
            <li><a onClick={() => {setFunCompo3(!funCompo3);}}>Abilities</a></li>
            <li><a onClick={() => {setFunCompo4(!funCompo4);}}>Achievements</a></li><br/><br/>
          </ul>
      </div>
      <div className="Compo">
        <FunIntro name="Riya Shah" location="Ahmedabad" email="riya.shah@gmail.com" phone="+91 6355648844"/>
          {funCompo2 && <FunObj />}
          {classCompo1 && <ClassEdu />}
          {classCompo2 && <ClassExp />}
          {classCompo3 && <ClassPro />}
          {classCompo4 && <ClassSkill />}
          {funCompo3 && <FunAbi />}
          {funCompo4 && <FunAch />}
      </div>

    </div>   
  </>
  )
}