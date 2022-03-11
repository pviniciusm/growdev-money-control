const initialState = [{ value: 50, description: 'Mesada', data: new Date() }];

export const inReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'in/ADD':
      return [...state, action.payload];
    default:
      return state;
  }
};
