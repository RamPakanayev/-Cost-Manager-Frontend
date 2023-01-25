import React, { useState, useEffect } from "react";
import LocalStorageLibrary from "../LocalStorage";
import AddCostForm from "./AddCostForm";
import ReportsForm from "./ReportsForm";

// Main component that renders the AddCostForm and ReportsForm components
// It also handles the data manipulation and communication with the LocalStorageLibrary
function App() {
// State variables for the cost items, report data, and report display toggle
const [costItems, setCostItems] = useState([]);
const [report, setReport] = useState([]);
const [showReport, setShowReport] = useState(false);
const [month, setMonth] = useState(0);
const [year, setYear] = useState(0);
const [imagePath, setImagePath] = useState("./Logo.png");

// useEffect hook that sets the imagePath state variable to the correct file path
useEffect(() => {
setImagePath(process.env.PUBLIC_URL + "/Logo.png");
}, []); // this will make the effect to be called only once when the component is rendered

// callback function that adds a new cost item to the local storage
// It uses the LocalStorageLibrary tosave the new cost item and updates the costItems state variable with the updated data from the local storage
async function handleAddCostItem(sum, category, description) {
  try {
  if (category === "" || category === "Select a category")
  category = "Other";
  if (sum === "") window.alert("Please enter a sum");
  else if (description === "") window.alert("Please enter a description");
  else {
  await LocalStorageLibrary.addCostItem({
  sum,
  category,
  description,
  date: new Date(),
  });
  const costItems = await LocalStorageLibrary.getCostItems();
  setCostItems(costItems);
  window.alert("The new cost has successfully added !");
  }
  } catch (error) {
  console.error(error);
  }
  }
  
  // callback function that gets a report of the costs based on the selected month and year
  // It uses the LocalStorageLibrary to get the report data and updates the report and showReport state variables
  async function handleGetReport(month, year) {
  try {
  const reportData = await LocalStorageLibrary.getReport(month, year);
  setReport(reportData);
  setShowReport(true);
  } catch (error) {
  console.error(error);
  }
  }
  
  return (
  <div className="App">
  <img src={imagePath} alt="Logo" />
  <AddCostForm handleAddCostItem={handleAddCostItem} />
  <ReportsForm
    month={month}
    setMonth={setMonth}
    year={year}
    setYear={setYear}
    handleGetReport={handleGetReport}
    showReport={showReport}
    report={report}
  />
</div>);
}

export default App;