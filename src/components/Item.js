export default function Item({ item, onDeleteItem, onTogglePacked }) {
  return (
    <li>
      <input type="checkbox" onClick={() => onTogglePacked(item.id)} />
      <span
        style={item.packed ? { textDecoration: "line-through" } : {}}
      >{`${item.quantity} ${item.description}`}</span>
      <button onClick={() => onDeleteItem(item.id)}>❌</button>
    </li>
  );
}
