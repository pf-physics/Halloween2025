import React, { useEffect } from "react";
import "./App.css";
import "./firebaseconfig";
import CodeHandler from "./CodeHandler/code-handler";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import Menu from "./misc/Menu";
import { useAppSelector } from "./store/hooks";
import { useGetPoints } from "./hooks/pointsHooks";

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
      main: "#63C328",
    },
    secondary: {
      main: "#F4831B",
    },
  },
});

function App() {
  const points = useAppSelector((state) => state.points.value);
  const bossTime = useAppSelector((state) => state.misc.bossTime);
  useGetPoints();

  useEffect(() => {
    document.title = "Halloween 2024";
  }, []);
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        {!bossTime && (
          <header className="App-header">
            <div>Halloween 2024</div>
            <div>{points} points</div>
            <Menu />
          </header>
        )}
        <div
          className="app-content"
          style={{ maxWidth: bossTime ? undefined : "400px" }}
        >
          <CodeHandler />
        </div>
      </ThemeProvider>
    </div>
  );
}

export default App;
