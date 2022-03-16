export const addIn = (payload) => {
  return {
    type: 'in/ADD',
    payload,
  };
};

export const updateIn = (payload) => {
  return {
    type: 'in/UPDATE',
    payload,
  };
};
