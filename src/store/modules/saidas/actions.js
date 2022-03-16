export const addOut = (payload) => {
  return {
    type: 'out/ADD',
    payload,
  };
};

export const updateOut = (payload) => {
  return {
    type: 'out/UPDATE',
    payload,
  };
};
