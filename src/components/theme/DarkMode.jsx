import React, {useState} from 'react'
import styled, {ThemeProvider} from 'styled-components';
import {LightTheme, DarkTheme, GlobalStyles} from './theme.js'
import './theme.css'


function DarkMode() {
const [theme, setTheme] = useState('light');

const themeToggler = () => {
    theme === 'light' ? setTheme('dark') : setTheme('light');
}
  return (
      <ThemeProvider theme={theme === 'light' ? LightTheme : DarkTheme}>
          <GlobalStyles />
          <Box>
                <label className="switch">
                    <input type="checkbox" onClick={()=> themeToggler()}/>
                    <span className="slider"></span>
                </label>
          </Box>
      </ThemeProvider>
  )
}

export default DarkMode;

const Box = styled.div`
    display: flex;
    justify-content: flex-end;
    padding-top: 20px;
`