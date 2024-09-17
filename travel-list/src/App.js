import React, { useState } from "react";
import Logo from "./logo";
import Form from "./Form";
import PackingList from "./packingList";
import Stats from "./stats";

export default function App() {
  const [items, setItems] = useState([]);
  function handleItem(newItem) {
    setItems(() => [...items, newItem]);
  }
  function handleDeleteItem(id) {
    setItems((item) => item.filter((item) => item.id !== id));
  }
  function handleUpdateItem(updateItemId) {
    setItems((item) =>
      item.map((item) =>
        item.id === updateItemId ? { ...item, packed: !item.packed } : item
      )
    );
  }
  function clearItems() {
    var ans = window.confirm("Are you sure you want to delete?");
    ans && setItems([]);
  }
  return (
    <div className="app">
      <Logo />
      <Form handleItem={handleItem} />
      <PackingList
        items={items}
        handleDeleteItem={handleDeleteItem}
        handleUpdateItem={handleUpdateItem}
        clearItems={clearItems}
      />
      <Stats items={items} />
    </div>
  );
}
