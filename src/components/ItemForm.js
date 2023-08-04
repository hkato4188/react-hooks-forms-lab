import React, { useState } from "react";
import { v4 as uuid } from "uuid";

function ItemForm({ onItemFormSubmit }) {
  const [newItem, setNewItem] = useState({
    name: "",
    category: "Produce",
  });

  const { name, category } = newItem;

  function handleFormChange(e) {
    const name = e.target.name;
    const value = e.target.value;
    setNewItem({
      ...newItem,
      [name]: value,
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    onItemFormSubmit({
      id: uuid(),
      name,
      category,
    });
  }

  return (
    <form className="NewItem" onSubmit={handleSubmit}>
      <label>
        Name:
        <input
          type="text"
          name="name"
          value={name}
          onChange={handleFormChange}
        />
      </label>

      <label>
        Category:
        <select name="category" value={category} onChange={handleFormChange}>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </label>

      <button onSubmit={handleSubmit} type="submit">
        Add to List
      </button>
    </form>
  );
}

export default ItemForm;
