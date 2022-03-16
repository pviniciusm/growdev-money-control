import { getBeer } from '../../../services/beer';
import { addIn } from '../entradas/actions';

export const fetchBeer = () => {
  return (dispatch) => {
    getBeer().then((data) => {
      console.log(data);
      dispatch(addIn({ value: 10, description: 'teste' }));
      dispatch(updateBeer(data));
    });
  };
};

export const updateBeer = (payload) => {
  return {
    type: 'beer/UPDATE',
    payload,
  };
};
