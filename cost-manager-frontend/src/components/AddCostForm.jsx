import React, { useState } from "react";

function AddCostForm({ handleAddCostItem }) {
  const [sum, setSum] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");

  function validateInputs() {
    if (sum === "") {
      window.alert("Please enter a sum");
      return false;
    }
    if (description === "") {
      window.alert("Please enter a description");
      return false;
    }
    return true;
  }

  return (
    <form>
      <h2>Add new cost item</h2>
      <hr />
      <label>
        Sum:
        <input
          type="number"
          value={sum}
          onChange={(e) => setSum(e.target.value)}
          placeholder="Enter a sum"
          min="0"
        />
      </label>
      <br />
      <label>
        Description:
        <input
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Enter a description"
        />
      </label>
      <br />
      <label>
        Category:
        <select value={category} onChange={(e) => setCategory(e.target.value)}>
          <option value="groceries">Select a category</option>
          <option value="groceries">Groceries</option>
          <option value="entertainment">Entertainment</option>
          <option value="transportation">Transportation</option>
          <option value="Housing">Housing</option>
          <option value="Personal Care">Personal Care</option>
          <option value="Other">Other</option>
        </select>
      </label>
      <br />
      <button
        onClick={(e) => {
          e.preventDefault();
          if (validateInputs()) {
            handleAddCostItem(sum, category, description);
            setSum("");
            setCategory("");
            setDescription("");
          }
        }}
      >
        Add Cost Item
      </button>
    </form>
  );
}

export default AddCostForm;
