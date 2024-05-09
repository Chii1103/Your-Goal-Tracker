import React from "react";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { Grid } from "@mui/material";
import theme from "./Theme";
import Quote from "./Quote";
import Weather from "./Weather";
import Progress from "./Progress";
import Todo from "./Todo";
import "./App.css";

// const theme = createTheme({
//   palette: {
//     primary: {main: '#1976d2'}, // 青系の色
//     secondary: {main: '#dc004e'},
//   },
// });

const App = () => {
  return (
    <div className="appWrapper">
      <CssBaseline />
      <ThemeProvider theme={theme}>
        <Quote />

        <Grid container spacing={2}>
          <Grid item xs={12} md={4}>
            <Weather />
          </Grid>
          <Grid item xs={12} md={4}>
            <Progress />
          </Grid>
          <Grid item xs={12} md={4}>
            <Todo />
          </Grid>
        </Grid>
      </ThemeProvider>
    </div>
  );
};

export default App;
