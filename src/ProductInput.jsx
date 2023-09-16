import React, { useState } from "react";


const ProductInput = ({ onAddItem }) => {
  const [caption, setCaption] = useState("");
  const [amount, setAmount] = useState("");

  const handleAddProduct = () => {
    if (caption.trim() !== "" && amount.trim() !== "") {
      const newItem = { id: Date.now(), caption, amount };
      onAddItem(newItem);
      setCaption("");
      setAmount("");
    }
  };
  

  return (
    <div>
      <h2>Додати продукт</h2>
      <div>
        <label>
          Caption:
          <input
            type="text"
            value={caption}
            onChange={(e) => setCaption(e.target.value)}
          />
        </label>
      </div>
      <div>
        <label>
          Amount:
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
        </label>
      </div>
      <button onClick={handleAddProduct}>Додати</button>
    </div>
  );
};

export default ProductInput;
