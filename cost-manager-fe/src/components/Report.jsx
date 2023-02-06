//Ram Pakanayev 313561433
//Carmel Isaac 320827512
//Michelle Chorny 207435918

import React from "react";

// A functional component that receives an object 'reportData' as a prop.
// It calculates and displays the total sum of all the report items and displays each report item's sum, category, description, and date.
// If no report data is found, it displays a message 'No Report data Found.'
function Report({ reportData }) {
// A callback function that calculates the total sum of all the report items.
// It loops through the reportData array and adds each item's 'sum' value to the total sum.
// It then returns the total sum formatted as a US currency.
const totalSum = () => {
let sum = 0;
reportData.forEach((item) => {
sum += Number(item.sum);
});
return new Intl.NumberFormat("en-US").format(sum);
};

return (
<>
<div className="reports">
{reportData.length > 0 ? (
reportData.map((item, index) => (
<div key={index} className="report">
<div className="ReportNumber">
<p className="pCenter">{index + 1}</p>
</div>
<p className="bold">
Sum: {Intl.NumberFormat("en-US").format(item.sum)} $
</p>
<p>Category: {item.category}</p>
<p>Description: {item.description}</p>
<p>Date: {item.date}</p>
</div>
))
) : (
<div className="no-data-found">No Report data Found.</div>
)}
<div className="total-sum">Total Sum: {totalSum()} $</div>
</div>
</>
);
}

export default Report;