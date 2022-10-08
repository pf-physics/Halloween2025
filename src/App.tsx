import React from 'react';
import './App.css';
import './firebaseconfig';
import CodeHandler from './CodeHandler/code-handler';
import { ThemeProvider, createTheme } from '@mui/material/styles';

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
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
      <header className="App-header">
        <div>Halloween 2022</div>
      </header>
      <div className="app-content">
        <CodeHandler/>
      </div>
      </ThemeProvider>
    </div>
  );
}

export default App;
