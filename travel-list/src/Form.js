import React, { useState } from "react";
export default function Form({ handleItem }) {
  const [description, setDescription] = useState("");
  const [select, setSelect] = useState(1);

  function handleSubmit(e) {
    e.preventDefault();
    if (!description) return;

    const newItem = {
      description,
      select,
      packed: false,
      id: Date.now(),
    };
    handleItem(newItem);
    setDescription("");
    setSelect(1);
  }

  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <h3> What do you need for your trip? 😍</h3>
      <select
        value={select}
        onChange={(e) => setSelect(Number(e.target.value))}
      >
        {Array.from({ length: 20 }, (_, i) => i + 1).map((op) => (
          <option value={op} key={op}>
            {op}
          </option>
        ))}
      </select>
      <input
        type="text"
        placeholder="item..."
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      ></input>
      <button>Add</button>
    </form>
  );
}
