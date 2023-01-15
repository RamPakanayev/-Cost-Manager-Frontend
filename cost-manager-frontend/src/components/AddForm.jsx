import React, { useState, useEffect } from "react";
import SpentItem from "./SpentItem";
// const AddForm = () => {
//   return (
//     <form>
//       <div className="row">
//         <div className="col-sm">
//           <label for="name">Name</label>
//           <input
//             required="required"
//             type="text"
//             className="form-control"
//             id="name"
//           ></input>
//         </div>

//         <div className="col-sm">
//           <label htmlFor="catgory">Catgory</label>
//           <select id="catgory" className="form-control">
//             <option value="">Select Catgory</option>
//             <option value="Food">Food</option>
//             <option value="health">Health</option>
//             <option value="housing">Housing</option>
//             <option value="sport">Sport</option>
//             <option value="education">Education</option>
//             <option value="transportation">Transportation</option>
//             <option value="Other">Other</option>
//           </select>
//         </div>

//         <div className="col-sm">
//           <label for="cost">Cost</label>
//           <input
//             required="required"
//             type="text"
//             className="form-control"
//             id="cost"
//           ></input>
//         </div>
//       </div>
//       <div className="row">
//         <div className="col-sm">
//           <button type="submit" className="btn btn-primary mt-3">
//             Save
//           </button>
//         </div>
//       </div>
//     </form>
//   );
// };
import LocalStorage from "../LocalStorage";

const AddForm = () => {
  const handleSubmit = async (e) => {
    e.preventDefault();
    // Get the form data
    const expense = { name: e.target.name.value, cost: e.target.cost.value };
    // Store the expense in local storage
    console.log(expense);
    await LocalStorage.setItem("expenses", expense);
    // Clear the form
    e.target.name.value = "";
    e.target.cost.value = "";
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="name" placeholder="Name" />
      <input type="text" name="cost" placeholder="Cost" />
      <button type="submit">Add</button>
    </form>
  );
};

const SpentList = () => {
  const [expenses, setExpenses] = useState([]);

  useEffect(() => {
    const fetchExpenses = async () => {
      const storedExpenses = await LocalStorage.getItem("expenses");
      setExpenses(storedExpenses);
    };
    fetchExpenses();
  }, []);

  return (
    <ul className="list-group">
      {expenses.map((expense) => (
        <SpentItem key={expense.id} name={expense.name} cost={expense.cost} />
      ))}
    </ul>
  );
};

export default AddForm;
