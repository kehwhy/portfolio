import React from "react";
import { useState } from "react";
import { FaSeedling, FaSun, FaLeaf, FaSnowflake } from 'react-icons/fa'
import { IconButton } from 'evergreen-ui'

const ColorPaletteBar = () => {

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

  export default ColorPaletteBar;