import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import {
  Grid,
  Typography,
  IconButton,
  Card,
  Toolbar,
  TextField,
  FormControl,
  InputLabel,
  Select,
  CardContent,
  CardActions,
  Button,
  Box,
  MenuItem,
} from '@material-ui/core';
import { ArrowBack } from '@material-ui/icons';

import Alert from '../../components/alert';
import useStyles from './styles';
import { useDispatch, useSelector } from 'react-redux';
import { addIn } from '../../store/modules/entradas/actions';
import { addOut } from '../../store/modules/saidas/actions';
import { useHistory } from 'react-router-dom';

export default function Register() {
  const classes = useStyles();

  const [type, setType] = useState(2);
  const [description, setDescription] = useState('');
  const [value, setValue] = useState('');

  const beer = useSelector((state) => state.beer);

  const handleChangeSelect = (e) => setType(e.target.value);

  const handleChangeInput = (event, input) => {
    switch (input) {
      case 'value':
        setValue(event.target.value);
        break;
      case 'description':
        setDescription(event.target.value);
        break;
    }
  };

  const handleReset = () => {
    setValue('');
    setDescription('');
  };

  const dispatch = useDispatch();

  const history = useHistory();

  const handleSubmit = () => {
    type === 1
      ? dispatch(addIn({ value, description, data: new Date() }))
      : dispatch(addOut({ value, description, data: new Date() }));

    history.push('/');
    history.goBack();
  };

  return (
    <Grid item>
      <Toolbar>
        <Link to="/">
          <IconButton aria-label="back" component="span" type={type}>
            <ArrowBack />
          </IconButton>
        </Link>
        <Typography variant="h6">Voltar</Typography>
      </Toolbar>

      <Alert type="success" msg="Cdastrado com sucesso!" />

      <Grid item container spacing={3} alignItems="center" justify="center">
        <Grid item xs={12}>
          <Typography variant="h4" align="center">
            Cadastrar um lan??amento
          </Typography>
          <p>
            Cerveja {beer.brand} - nome {beer.name} - Page Register
          </p>
        </Grid>
        <Grid item xs={12} md={6}>
          <Card>
            <CardContent>
              <Typography gutterBottom className={classes.titleInfo}>
                Utilize o formul??rio abaixo para cadastrar suas sa??das e
                entradas.
              </Typography>
              <Box p={1}>
                <TextField
                  onChange={(e) => handleChangeInput(e, 'description')}
                  value={description}
                  fullWidth
                  label="Descri????o"
                  variant="outlined"
                />
              </Box>
              <Box p={1}>
                <TextField
                  onChange={(e) => handleChangeInput(e, 'value')}
                  value={value}
                  type="number"
                  fullWidth
                  label="R$ valor"
                  variant="outlined"
                />
              </Box>
              <Box p={1}>
                <FormControl
                  variant="outlined"
                  fullWidth
                  className={classes.formControl}
                >
                  <InputLabel id="demo-simple-select-outlined-label">
                    Tipo
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-outlined-label"
                    id="demo-simple-select-outlined"
                    value={type}
                    onChange={handleChangeSelect}
                    label="Age"
                  >
                    <MenuItem value={1}>Entrada</MenuItem>
                    <MenuItem value={2}>Sa??da</MenuItem>
                  </Select>
                </FormControl>
              </Box>
            </CardContent>

            <CardActions className={classes.actions}>
              <Box alignSelf="flex-start">
                <Button
                  variant="outlined"
                  onClick={handleReset}
                  color="secondary"
                >
                  limpar
                </Button>
              </Box>
              <Box alignSelf="flex-end">
                <Button
                  variant="contained"
                  onClick={handleSubmit}
                  color="secondary"
                >
                  cadastrar
                </Button>
              </Box>
            </CardActions>
          </Card>
        </Grid>
      </Grid>
    </Grid>
  );
}
