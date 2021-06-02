import React, { useState } from 'react';
import './App.css';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import logo from './images/logo.png';
import wallpaper from './images/AntofagastaHongKong.jpeg';
import About from './pages/about/about';
import Contact from './pages/contact/contact';
import Menu from './pages/menu/menu';

const themeDark = createMuiTheme({
  palette: {
    background: {
      default: "#282828"
    }
  }
});


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: "#282828",
  },
  abRoot: {
    backgroundColor: "#282828",
    alignItems: 'center',
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}))

function App() {
  const classes = useStyles();
  const [light, setLight] = useState(true);
  return (
    <MuiThemeProvider theme={themeDark}>
      <CssBaseline/> 
      <AppBar position="static" classes={{ 
      root: classes.abRoot,
      }}>
      <Toolbar>
        <img src={logo} alt="logo.png" width="50px" height="50px" className="logo"/>
        <Typography variant="h4" className={classes.title}>
          Restaurant La Ciudad Nueva
        </Typography>
      </Toolbar>
    </AppBar>
    <img src={wallpaper} alt="wallpaper" class="wallpaper"/>
      <Menu/>
      <About/>
      <Contact/>
  
      
    </MuiThemeProvider>
  );
}

export default App;
