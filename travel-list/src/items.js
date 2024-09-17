export default function Items({ item, handleDeleteItem, handleUpdateItem }) {
  return (
    <li>
      <span style={{ textDecoration: `${item.packed ? "line-through" : ""}` }}>
        <input
          type="checkbox"
          value={item.packed}
          onClick={() => handleUpdateItem(item.id)}
        />
        {" " + item.select + " "}
        {item.description}
      </span>
      <button onClick={() => handleDeleteItem(item.id)}>❌</button>
    </li>
  );
}
