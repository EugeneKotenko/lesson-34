// Reducer.jsx

// Початковий стан (пустий список покупок)
const initialState = {
    items: [],
  };
  
  // Типи дій
  const ADD_ITEM = "ADD_ITEM";
  const EDIT_ITEM = "EDIT_ITEM";
  const DELETE_ITEM = "DELETE_ITEM";
  
  // Редуктор
  const shoppingListReducer = (state = initialState, action) => {
    switch (action.type) {
      case ADD_ITEM:
        return {
          ...state,
          items: [...state.items, action.payload],
        };
  
      case EDIT_ITEM:
        const editedItems = state.items.map((item) =>
          item.id === action.payload.id ? action.payload : item
        );
        return {
          ...state,
          items: editedItems,
        };
  
      case DELETE_ITEM:
        const filteredItems = state.items.filter(
          (item) => item.id !== action.payload
        );
        return {
          ...state,
          items: filteredItems,
        };
  
      default:
        return state;
    }
  };
  
  export default shoppingListReducer;
  