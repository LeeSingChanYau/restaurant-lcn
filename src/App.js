import './App.css';
import AppBar from '@material-ui/core/AppBar';
import Grid from '@material-ui/core/Grid';
import Toolbar from '@material-ui/core/Toolbar';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import logo from './images/logo.png';
import wallpaper from './images/AntofagastaHongKong.jpeg';
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
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  buttonText: {
    color: '#54ba00',
    '&:hover': {
    color: '#f00'
    },
  },
}))

function App() {
  const classes = useStyles();

  return (
    <MuiThemeProvider theme={themeDark}>
      <CssBaseline/> 
      <AppBar position="fixed" classes={{ 
      root: classes.abRoot,
      }}>
      <Toolbar>
        <Grid container direction="row" alignItems="center">
          <Grid container justify="center">
            <Grid item>
              <img src={logo} alt="logo.png" width="50px" height="50px" className="logo"/>
            </Grid>
            <Grid item>
              <Typography variant="h4">
                Restaurant La Ciudad Nueva
              </Typography>
            </Grid>
          </Grid>
          <Grid container direction="row" justify="center" alignItems="center" spacing={5}>
            <Grid item>
                <a href='#menu'>
                  <Typography variant="h5" className='btn-text'>
                    Carta
                  </Typography>
                </a>
            </Grid>
            <Grid item> 
              <a href="#contact">
                <Typography variant="h5" className='btn-text'>
                  Contacto
                </Typography>
              </a>
            </Grid>
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
    <img src={wallpaper} alt="wallpaper" class="wallpaper"/>
      <div id="menu">
        <Menu/>
      </div>
      
      <div id="contact">
        <Contact/>
      </div>
  
      
    </MuiThemeProvider>
  );
}

export default App;
