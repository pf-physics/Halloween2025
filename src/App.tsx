import React, { useEffect } from 'react';
import './App.css';
import './firebaseconfig';
import CodeHandler from './CodeHandler/code-handler';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Menu from './misc/Menu';

/*
const theme = createTheme({
  components: {
    MuiCssBaseline: {
      styleOverrides: `
        h1 {
          color: grey;
        }
      `,
    },
  },
});*/


const theme = createTheme({
  palette: {
    primary: {
      main: "#63C328"
    },
    secondary: {
      main: '#F4831B'
    }
  }
});


function App() {
  useEffect(() => {
    document.title = "Halloween 2023"
  }, [])
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
      <header className="App-header">
        <div>Halloween 2023</div>
        <Menu/>
      </header>
      <div className="app-content">
        <CodeHandler/>
      </div>
      </ThemeProvider>
    </div>
  );
}

export default App;
