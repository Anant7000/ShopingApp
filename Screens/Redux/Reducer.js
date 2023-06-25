
  
  export const Reducers = (state = [], action) => {

    const isDuplicateItem = (itemA, itemB) => {
      // Implement your custom comparison logic here
      // For example, if the item has a property called "id":
      console.log(itemA.id);
      return itemA.id === itemB.id;
    };
    switch (action.type) {
      case 'ADD_TO_CART':
        const itemExists = state.find(item => isDuplicateItem(item, action.payload));
        
      if (itemExists) {
        alert('Item already exists in the cart.');
        return state; // Return the existing state without modifying it.
      }

      return [...state, action.payload];
  
      case 'REMOVE_FROM_CART':
        const deleteArray1 = state.filter((item, index) => {
          return index !== action.payload;
        });
  
        return deleteArray1;
      default:
        return state;
    }
  };