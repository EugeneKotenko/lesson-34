export const addItem = (caption, amount) => ({
  type: "ADD_ITEM",
  payload: { caption, amount },
});

export const editItem = (id, caption, amount) => ({
  type: "EDIT_ITEM",
  payload: { id, caption, amount },
});

export const deleteItem = (id) => ({
  type: "DELETE_ITEM",
  payload: { id },
});
