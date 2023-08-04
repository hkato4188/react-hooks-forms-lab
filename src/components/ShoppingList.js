import React, { useState } from "react";
import ItemForm from "./ItemForm";
import Filter from "./Filter";
import Item from "./Item";

function ShoppingList({ items, onItemFormSubmit }) {
  const [filterData, setFilterData] = useState({
    selectedCategory: "All",
    search: "",
  });
  const { selectedCategory, search } = filterData;

  function handleChange(e) {
    const name = e.target.name;
    const value = e.target.value;
    setFilterData({
      ...filterData,
      [name]: value,
    });
  }

  const itemsToDisplay = items
    .filter((item) => {
      if (selectedCategory === "All" || item.category === selectedCategory)
        return true;
    })
    .filter((item) => {
      if (item.name.toLowerCase().includes(search.toLowerCase())) return true;
    });

  return (
    <div className="ShoppingList">
      <ItemForm onItemFormSubmit={onItemFormSubmit} />
      <Filter search={search} onSearchChange={handleChange} />
      <ul className="Items">
        {itemsToDisplay.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
