import React, { useEffect, useState } from 'react';
import Button from '@material-ui/core/Button';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import { makeStyles } from '@material-ui/core/styles';

function MyAlert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    '& > * + *': {
      marginTop: theme.spacing(2),
    },
  },
}));

export default function Alert({ type, msg, show }) {
  const classes = useStyles();
  const [open, setOpen] = useState(false);

  const handleClose = (event, reason) => {
  };

  return (
    <div className={classes.root}>
      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <MyAlert onClose={handleClose} severity={type}>
          {msg}
        </MyAlert>
      </Snackbar>
    </div>
  );
}
