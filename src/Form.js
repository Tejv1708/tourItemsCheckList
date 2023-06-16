import { useState } from "react";
export default function Form({ onAddItems }) {
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState(1);

  function handlingForm(e) {
    e.preventDefault();

    if (!description) return;

    const newItems = { description, quantity, packed: false, id: Date.now() };
    onAddItems(newItems);
    setDescription("");
    setQuantity(1);
  }
  return (
    <form className="add-form" onSubmit={handlingForm}>
      <h3 className="mid">What you need for your 😊 trip </h3>
      <select
        value={quantity}
        onChange={(e) => {
          setQuantity(Number(e.target.value));
        }}
      >
        {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
          <option value={num} key={num}>
            {num}
          </option>
        ))}
      </select>
      <input
        type="text"
        placeholder="item..."
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <button>Add</button>
    </form>
  );
}
