import React, { useRef } from 'react';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import profile_pic from "./Images/profile_pic.png"
import Tabs from "react-bootstrap/Tabs"
import Tab from "react-bootstrap/Tab"
import 'bootstrap/dist/css/bootstrap.min.css';
import CV from './components/CV/CV';
import Projects from './components/Projects/Projects';
import MyIcon from './components/MyIcon/MyIcon';
import './App.css';


library.add(
  fab,
  far
)

const App = () => {

  const githubRef = useRef("https://github.com/kehwhy")
  const linkedInRef = useRef("https://www.linkedin.com/in/kathleen-younge-777908174/")
  const emailRef = useRef("mailto:kathleen.younge@mail.mcgill.ca")

  return (
    <div className="App">
      <header className="name-title">
      Katie Younge
      </header>
      <img className="profile-pic" src={profile_pic} alt=""/>
      <p className="intro">I am a 3rd year Software Engineering student at McGill University
      who is passionate about machine learning and artificial intelligence, as well as increasing 
      access to technology for children.</p>
      <div className="icons">
        <MyIcon link={linkedInRef} library="fab" iconName="linkedin" />
        <MyIcon link={githubRef} library="fab" iconName="github" />
        <MyIcon link={emailRef} library="far" iconName="envelope" />
      </div>
      <div className="tabs-div">
      <Tabs classname="myClass" defaultActiveKey="CV" id="main-nav-tabs">
        <Tab eventKey="CV" title="CV">
          <CV/>
        </Tab>
        <Tab eventKey="projects" title="Projects">
          <Projects/>
        </Tab>
      </Tabs>
      </div>
    </div>
  );
}

export default App;
