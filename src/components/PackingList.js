import { useState } from "react";
import Item from "./Item";

export default function PackingList({
  items,
  onDeleteItem,
  onTogglePacked,
  onClearList,
}) {
  const [sortBy, setSortBy] = useState("input");

  let sortedList;

  switch (sortBy) {
    case "description":
      sortedList = items
        .slice()
        .sort((a, b) => a.description.localeCompare(b.description));
      break;
    case "packed":
      sortedList = items
        .slice()
        .sort((a, b) => Number(b.packed) - Number(a.packed));
      break;
    default:
      sortedList = items;
  }

  return (
    <div className="list">
      <ul>
        {sortedList.map((item) => (
          <Item
            onTogglePacked={onTogglePacked}
            onDeleteItem={onDeleteItem}
            item={item}
            key={item.id}
          />
        ))}
      </ul>
      <div className="actions">
        <select
          value={sortBy}
          onChange={(e) => {
            setSortBy(e.target.value);
          }}
        >
          <option value="input">Sort by input</option>
          <option value="description">Sort by descritpion</option>
          <option value="packed">Sort by packed</option>
        </select>
        <button onClick={onClearList}>Clear list</button>
      </div>
    </div>
  );
}
