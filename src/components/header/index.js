import React, { useMemo } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';

import useStyles from './styles';
import { useSelector } from 'react-redux';

export default function Header() {
  const classes = useStyles();

  const saldoIn = useSelector((store) => store.in);
  const saldoOut = useSelector((store) => store.out);

  const saldoPositivo = saldoIn
    .map((item) => item.value)
    .reduce((previus, current) => Number(previus) + Number(current), 0);

  const saldoNegativo = saldoOut
    .map((item) => item.value)
    .reduce((previus, current) => Number(previus) + Number(current), 0);

  const saldo = saldoPositivo - saldoNegativo;

  return (
    <div className={classes.root}>
      <AppBar position="static" color="secondary">
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
          >
            LOGO
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            Controle de dinheiro
          </Typography>
          <Typography variant="h6">Saldo atual R$ {saldo}</Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}
