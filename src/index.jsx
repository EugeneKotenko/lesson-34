import React from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { createStore } from "redux";
import { shoppingListReducer } from "./Reducer.jsx";
import ShoppingList from "./ShoppingList.jsx";
import Modal from "react-modal";

const store = createStore(shoppingListReducer);

Modal.setAppElement("#root");

const root = createRoot(document.getElementById("root"));

root.render(
  <Provider store={store}>
    <ShoppingList />
  </Provider>
);
