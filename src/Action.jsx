export const addItem = (item) => ({
  type: "ADD_ITEM",
  payload: item,
});

export const editItem = (id, item) => ({
  type: "EDIT_ITEM",
  payload: { id, item },
});

export const deleteItem = (id) => ({
  type: "DELETE_ITEM",
  payload: id,
});
