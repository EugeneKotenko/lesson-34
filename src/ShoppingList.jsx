import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { addItem, editItem, deleteItem } from "./Action.jsx";
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";
import ProductInput from "./ProductInput.jsx";

const ShoppingList = () => {
  const items = useSelector((state) => state.items);
  const dispatch = useDispatch();

  const columnDefs = [
    { headerName: "Caption", field: "caption" },
    { headerName: "Amount", field: "amount" },
    {
      headerName: "Actions",
      cellRendererFramework: (params) => {
        const editButton = (
          <button onClick={() => handleEditItem(params.data)}>
            Редагувати
          </button>
        );
        const deleteButton = (
          <button onClick={() => handleDeleteItem(params.data.id)}>
            Видалити
          </button>
        );
        return (
          <div>
            {editButton} {deleteButton}
          </div>
        );
      },
    },
  ];

  const defaultColDef = {
    sortable: true,
    flex: 1,
  };

  const handleAddItem = (newItem) => {
    dispatch(addItem(newItem));
  };

  const handleEditItem = (item) => {
    dispatch(editItem(item.id, item));
  };

  const handleDeleteItem = (id) => {
    dispatch(deleteItem(id));
  };

  return (
    <div>
      <h2>Список покупок</h2>
      <div className="ag-theme-alpine" style={{ height: 300, width: "80%" }}>
        <AgGridReact
          columnDefs={columnDefs}
          defaultColDef={defaultColDef}
          rowData={items}
          domLayout="autoHeight"
        />
      </div>
      <div>
      <ProductInput onAddItem={handleAddItem} />
      </div>
    </div>
  );
};

export default ShoppingList;
