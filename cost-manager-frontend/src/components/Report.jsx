import React from "react";

function Report({ reportData }) {
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
