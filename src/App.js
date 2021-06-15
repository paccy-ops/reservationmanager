import React from "react";
import Header from "./Header/Header";
import Table from './Data/Table'
import { makeStyles, CssBaseline, createMuiTheme, ThemeProvider } from '@material-ui/core';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#e52165",
      light: '#0d1137'
    },
    secondary: {
      main: "#077b8a",
      light: '#5c3c92'
    },
    background: {
      default: "#000000"
    },
  },
  overrides:{
    MuiAppBar:{
      root:{
        transform:'translateZ(0)'
      }
    }
  },
  props:{
    MuiIconButton:{
      disableRipple:true
    }
  }
})

const useStyles = makeStyles({
  appMain: {
    paddingLeft: '20px',
    PaddingRight:'30px',
    width: '98%'
  }
})


function App() {
      const classes = useStyles();

  return (
      <ThemeProvider theme={theme}>
      <div className={classes.appMain}>
         <Header/>
        <Table/>
      </div>
      <CssBaseline />
    </ThemeProvider>

  );
}

export default App;
