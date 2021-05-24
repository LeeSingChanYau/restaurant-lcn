import './App.css';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { createMuiTheme } from '@material-ui/core/styles';
import purple from '@material-ui/core/colors/purple';
import green from '@material-ui/core/colors/green';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  abRoot: {
    backgroundColor: "#1f9c41",
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  }
}))

function App() {
  const classes = useStyles();

  return (
    <div className={classes.root}> 
      <AppBar position="static" classes={{ 
      root: classes.abRoot,
      }}>
      <Toolbar>
        <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" className={classes.title}>
          Restaurant La Ciudad Nueva
        </Typography>
        <Button color="inherit">Login</Button>
      </Toolbar>
    </AppBar>
    </div>
  );
}

export default App;
