import React, { useMemo } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';

import useStyles from './styles';


export default function Header() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static" color="secondary">
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            LOGO
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            Controle de dinheiro
          </Typography>
          <Typography variant="h6">
            Saldo atual R$
            {' '}
            0,00
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}
