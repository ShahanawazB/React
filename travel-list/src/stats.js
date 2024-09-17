export default function Stats({ items }) {
  const numItems = items.length;
  const numItemsPacked = items.filter((items) => items.packed).length;
  const itemsPercentage = Math.round((numItemsPacked / numItems) * 100);

  if (!numItems)
    return (
      <p className="stats">
        <em>start adding items</em>
      </p>
    );
  return (
    <footer className="stats">
      {itemsPercentage === 100 ? (
        <em>You are ready to go </em>
      ) : (
        <em>
          You have {numItems} items in your list, and you already packed
          {" " + numItemsPacked + " "}
          {itemsPercentage}%
        </em>
      )}
    </footer>
  );
}
