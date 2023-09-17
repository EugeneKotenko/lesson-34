const initialState = {
    items: [],
  };
  
  export const shoppingListReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'ADD_ITEM':
        return {
          ...state,
          items: [...state.items, { id: Date.now(), ...action.payload }],
        };
      case 'EDIT_ITEM':
        const editedItemIndex = state.items.findIndex((item) => item.id === action.payload.id);
        const updatedItems = [...state.items];
        updatedItems[editedItemIndex] = action.payload;
        return {
          ...state,
          items: updatedItems,
        };
      case 'DELETE_ITEM':
        return {
          ...state,
          items: state.items.filter((item) => item.id !== action.payload.id),
        };
      default:
        return state;
    }
  };

  export default shoppingListReducer;