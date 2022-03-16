const initialState = [{ value: 100, description: 'Boleto', data: new Date() }];

export const outReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'out/ADD':
      return [...state, action.payload];
    default:
      return state;
  }
};
