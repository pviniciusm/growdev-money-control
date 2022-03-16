const initialState = { name: 'teste', brand: 'samuel addams' };

export const beerReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'beer/UPDATE':
      return action.payload;
    default:
      return state;
  }
};
