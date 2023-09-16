import React from "react";
import { Provider } from "react-redux";
import store from "./store.jsx";
import ShoppingList from "./ShoppingList.jsx";

const App = () => {
  return (
    <Provider store={store}>
      <div>
        <ShoppingList />
      </div>
    </Provider>
  );
};

export default App;
