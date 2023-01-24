import React, { useState, useEffect } from "react";
import LocalStorageLibrary from "../LocalStorage";
import AddCostForm from "./AddCostForm";
import ReportsForm from "./ReportsForm";

function App() {
  const [costItems, setCostItems] = useState([]);
  const [report, setReport] = useState([]);
  const [showReport, setShowReport] = useState(false);
  const [month, setMonth] = useState(0);
  const [year, setYear] = useState(0);
  const [imagePath, setImagePath] = useState("./Logo.png");

  useEffect(() => {
    setImagePath(process.env.PUBLIC_URL + "/Logo.png");
  }, []);

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
      console.log(error);
    }
  }

  async function handleGetReport(month, year) {
    try {
      const reportData = await LocalStorageLibrary.getReport(month, year);
      setReport(reportData);
      setShowReport(true);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="App">
      <img src={imagePath} alt="Logo"></img>
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
    </div>
  );
}

export default App;
