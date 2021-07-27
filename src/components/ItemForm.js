import React from "react";
import { v4 as uuid } from "uuid";
import { useState } from "react";

function ItemForm({ onItemFormSubmit }) {
  const [inputData, setInputData] = useState({
    name: "",
    category: "Produce",
  });

  const manageFormData = (e) => {
    setInputData({
      ...inputData,
      [e.target.name]: e.target.value,
    });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    const newItem = {
      id: uuid(),
      name: inputData.name,
      category: inputData.category,
    };
    onItemFormSubmit(newItem);
  };

  return (
    <form onSubmit={handleFormSubmit} className="NewItem">
      <label>
        Name:
        <input onChange={manageFormData} type="text" name="name" />
      </label>

      <label>
        Category:
        <select name="category" onChange={manageFormData}>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </label>

      <button type="submit">Add to List</button>
    </form>
  );
}

export default ItemForm;
