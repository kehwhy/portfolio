import React from 'react';
import { useState} from 'react';
import { FaSeedling, FaSun, FaLeaf, FaSnowflake } from 'react-icons/fa'
import { IconButton } from 'evergreen-ui'
// import profile_pic from "./Images/profile_pic.png"
// import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa'
// import Tabs from "react-bootstrap/Tabs"
// import Tab from "react-bootstrap/Tab"
// import { Heading, Icon, Pane, Paragraph } from "evergreen-ui"
// import CV from './components/CV/CV';
// import Projects from './components/Projects/Projects';
// import "bootstrap/dist/css/bootstrap.min.css";

import "./Styles/app.scss"

const App = () => {

  const [colorTheme, setColorTheme] = useState(0);
  
  const getTheme = (themeNumber) => {
    switch(themeNumber) {
      case 0: 
        return 'theme--fall'
      case 1:
        return 'theme--winter'
      case 2:
        return 'theme--spring'
      default:
        return 'theme--summer'
    }
  }

  return (
    <main id="app-root" class={getTheme(colorTheme)}>
        <div className="base">
          <div className="seasonButton">
            <IconButton appearance='minimal' icon={FaLeaf} onClick ={()=>setColorTheme(0)} >
            </IconButton>
          </div>
          <div className="seasonButton">
            <IconButton appearance='minimal' icon={FaSnowflake} onClick ={()=>setColorTheme(1)} >
            </IconButton>
          </div>
          <div className="seasonButton">
            <IconButton appearance='minimal' icon={FaSeedling} onClick ={()=>setColorTheme(2)} >
            </IconButton>
          </div>
          <div className="seasonButton">
          <IconButton appearance='minimal' icon={FaSun} onClick ={()=>setColorTheme(3)} >
          </IconButton>
          </div>
        </div>
  
      </main>
  )
}

//   return (
//     <Pane className="App" elevation={3}>
//       <Pane className="left_pane"> 
//         <Pane className="container">
//         <img className="profile-pic" src={profile_pic} alt=""/>
//         <Heading size={800} className="name-title">
//         Katie Younge
//         </Heading>
//         <Paragraph size={700} className="intro">3rd year Software Engineering student at McGill University
//         with a passion for machine learning and artificial intelligence, as well as increasing 
//         access to technology for children</Paragraph>
//         <div className="icons">
//           <div className='icon'>
//             <a href={"https://www.linkedin.com/in/kathleen-younge-777908174/"}>
//                   <Icon color="#187795" icon={FaLinkedin} size={32}></Icon>
//             </a>
//           </div>
//           <div className='icon'>
//             <a href={"https://github.com/kehwhy"}>
//                   <Icon color="#187795" icon={FaGithub} size={32}></Icon>
//             </a>
//           </div>
//           <div className='icon'>
//             <a href={"mailto:kathleen.younge@mail.mcgill.ca"}>
//                   <Icon color="#187795" icon={FaEnvelope} size={32}></Icon>
//             </a>
//           </div>
//         </div>
//         </Pane>
//       </Pane>
//       <Pane className="tabs-div">
//         <Tabs classname="myClass" defaultActiveKey="CV" id="main-nav-tabs">
//           <Tab eventKey="CV" title="CV">
//             <CV/>
//           </Tab>
//           <Tab eventKey="projects" title="Projects">
//             <Projects/>
//           </Tab>
//         </Tabs>
//       </Pane>
//     </Pane>
//   );
// }

export default App;
