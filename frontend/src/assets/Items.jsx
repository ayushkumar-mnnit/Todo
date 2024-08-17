import { useState, useEffect } from "react";
import "./item.css";

import img1 from "../assets/wrong-icon.png"

const Items = () => {
  const getItemsFromLocalStorage = () => {
    const result = localStorage.getItem("myList");
    return result ? JSON.parse(result) : [];
  };

  const [newItem, setNewItem] = useState("");
  const [items, setItems] = useState(getItemsFromLocalStorage());

  const handleChange = (e) => {
    setNewItem(e.target.value);
  };

  const addNew = (e) => {
    e.preventDefault();
    if (newItem !== "") {
      setItems([...items, newItem]);
      setNewItem("");
    }
  };

  useEffect(() => {
    localStorage.setItem("myList", JSON.stringify(items));
  }, [items]);

  const removeAll = () => {
    setItems([]);
  };

  const deleteItem = (index) => {
    const updatedItems = [...items];
    updatedItems.splice(index, 1);
    setItems(updatedItems);
  };

  return (
    <>
      <div className="todo-container">
        <h2>Todo List</h2>
        <form onSubmit={addNew} className="todo-form">
          <input
            type="text"
            value={newItem}
            onChange={handleChange}
            placeholder="Add a new task"
            className="todo-input"
          />
          <button type="submit" className="add-btn">Add</button>
        </form>
        <ul className="todo-list">
          {items.length > 0 && items.map((item, index) => (
            <li key={index} className="todo-item">
              <div className="todo-card">
                {item}
                <button onClick={() => deleteItem(index)} className="delete-btn">
                <img src={img1} width={20} height={20} alt="remove all" />
                </button>
              </div>
            </li>
          ))}
        </ul>
        {items.length > 0 && <button onClick={removeAll} className="remove-all-btn">Remove all</button>}
      </div>
    </>
  );
};

export default Items;
