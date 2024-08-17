import { useState, useEffect } from "react";
import "./item.css";

const Items = () => {
  const getItemsFromLocalStorage = () => {
    const result = localStorage.getItem("myList"); 
    return result ? JSON.parse(result) : []; // Always return an array
  };

  const [newItem, setNewItem] = useState("");
  const [items, setItems] = useState(getItemsFromLocalStorage()); // Correctly initializing state

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
              {item}
              <button onClick={() => deleteItem(index)} className="delete-btn">
                Delete
              </button>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Items;
