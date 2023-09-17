import React from 'react';
import './styles.scss'

const btnStyle = {
    border: "none",
    backgroundColor: "transparent",
    cursor: "pointer",
    marginLeft: '10px'
}

const itemStyle = {
    marginTop: '40px'
}

const ShoppingItem = ({ item, onEditClick, onDeleteClick }) => {
  return (
    <div style={ itemStyle}>
      <span>{item.caption} - {item.amount}</span>
      <button style={btnStyle} onClick={onEditClick}>✏️</button>
      <button style={btnStyle} onClick={onDeleteClick}>🗑️</button>
    </div>
  );
};

export default ShoppingItem;