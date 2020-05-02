import React from "react";
import "./App.css";

const numButtons = 3000;

const FancyButton = ({ label, id, onClick, isSelected }) => {
  return (
    <div>
      <button
        key={id}
        id={id}
        className={`button${isSelected ? " selected" : ""}`}
        onClick={onClick}
      >
        {label}
      </button>
    </div>
  );
};

const App = () => {
  // A set containing ids of selected items
  const [selectedItems, setSelectedItems] = React.useState(new Set());

  // ids = ["0", "1", ...., "2999"]
  const ids = [...Array(numButtons).keys()].map((n) => n.toString());

  // Add id to selectedItems
  const handleClick = (id) => {
    setSelectedItems((prevState) => new Set([...prevState, id]));
  };

  return (
    <div className="app">
      <h1>No Event Delegation</h1>
      <div className="container">
        {ids.map((id) => (
          <FancyButton
            key={id}
            id={id}
            label={id}
            isSelected={selectedItems.has(id)}
            onClick={() => handleClick(id)}
          />
        ))}
      </div>
    </div>
  );
};

export default App;
