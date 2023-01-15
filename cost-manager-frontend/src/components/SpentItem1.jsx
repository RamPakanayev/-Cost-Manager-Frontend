import React from "react";
import { TiDelete } from "react-icons/ti";

const SpentItem = (props) => {
  const handleDelete = async (e) => {
    e.preventDefault();
    // Delete the expense from local storage
    await LocalStorage.removeItem(`expense-${props.id}`);
    // Update the expenses state
    const storedExpenses = await LocalStorage.getItem("expenses");
    setExpenses(storedExpenses);
  };
  return (
    <li className="list-group-item d-flex justify-content-between align-items-center">
      {props.name}
      <div>
        <span className="">£{props.cost}</span>
        <TiDelete size="1.5em" onClick={handleDelete}></TiDelete>
      </div>
    </li>
  );
};

export default SpentItem;
