import { useState } from "react";
import Logo from "./Logo";
import Form from "./Form";
import PackList from "./PackList";
import Stat from "./Stat";

export default function App() {
  const [items, setItems] = useState([]);

  function handleAddItems(item) {
    setItems((items) => [...items, item]);
  }
  function handleDeleteItem(id) {
    setItems((items) => items.filter((item) => item.id !== id));
  }

  function handleClear() {
    const confirm = window.confirm(
      "Are you sure you want to delete all the items"
    );

    if (confirm) setItems([]);
  }

  function handleToggle(id) {
    setItems((items) =>
      items.map((item) =>
        item.id === id
          ? {
              ...item,
              packed: !item.packed,
            }
          : item
      )
    );
  }
  return (
    <div className="app">
      <Logo />
      <Form onAddItems={handleAddItems} />
      <PackList
        items={items}
        onDeleteItem={handleDeleteItem}
        onToggleItem={handleToggle}
        onClear={handleClear}
      />
      <Stat items={items} />
    </div>
  );
}
