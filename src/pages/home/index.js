import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';

import { Grid, Fab } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import DataTable from '../../components/data-table';
import { useDispatch, useSelector } from 'react-redux';
import { getBeer } from '../../services/beer';
import { fetchBeer } from '../../store/modules/beer/action';

export default function Home() {
  const history = useHistory();
  // const [incomeInLocal, setIncomeInLocal] = useState([]);
  // const [incomeOutLocal, setIncomeOutLocal] = useState([]);

  // const [beer, setBeer] = useState({});
  const beer = useSelector((state) => state.beer);
  const dispatch = useDispatch();

  useEffect(async () => {
    dispatch(fetchBeer());
  }, []);

  const incomeInGlobal = useSelector((store) => store.in);
  const incomeOutGlobal = useSelector((store) => store.out);

  const handleClick = () => {
    history.push('/register');
  };

  return (
    <Grid item>
      <Grid item container spacing={2}>
        <Grid item xs={12}>
          <p>
            Cerveja {beer.brand} - nome {beer.name}
          </p>
        </Grid>
        <Grid item xs={12} md={6}>
          <DataTable title="Entradas" data={incomeInGlobal} />
        </Grid>

        <Grid item xs={12} md={6}>
          <DataTable title="Saídas" data={incomeOutGlobal} />
        </Grid>
      </Grid>

      <Fab color="primary" aria-label="add" onClick={() => handleClick()}>
        <AddIcon />
      </Fab>
    </Grid>
  );
}
