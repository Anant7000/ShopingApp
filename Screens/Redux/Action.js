export const addItemToCart = data => ({
    type: 'ADD_TO_CART',
    payload: data,
  });
  export const removeFromCart = index => ({
    type: 'REMOVE_FROM_CART',
    payload: index,
  });