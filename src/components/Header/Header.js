import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import PropTypes from "prop-types";
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { Logo } from 'loft-taxi-mui-theme';
import Button from '@material-ui/core/Button';
import { AuthContext } from '../../context/AuthContext';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  grow: {
    flexGrow: 1
  }
}));

export const Header = () => {
  const classes = useStyles();
  const { logout } = useContext(AuthContext);

  const onClick = () => {
    logout();
  }
  
  return (
    <AppBar position="static" color="inherit">
        <Toolbar>
          <Typography variant="h6" color='inherit' className={classes.grow}>
            <Logo/>
          </Typography>
          <Button color="inherit">
            <Link to="/map">Карта</Link>
          </Button>
          <Button color="inherit">
            <Link to="/profile">Профиль</Link>
          </Button>
          <Button id={'LogoutButton'} color="inherit" onClick={onClick}>Выйти</Button>
        </Toolbar>
      </AppBar>
  );
}

Header.propTypes = {
  setRoute: PropTypes.func
};
