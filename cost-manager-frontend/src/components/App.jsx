import React from "react";
import SpentTotal from "./SpentTotal";
import SpentList from "./SpentList";
import AddForm from "./AddForm";
import "bootstrap/dist/css/bootstrap.min.css";

const App = () => {
  return (
    <div className="container">
      <h1 className="mt-3">Cost Manager Frontend </h1>
      <div className="col-sm">
        <SpentTotal />
      </div>
      <div className="col-sm">
        <SpentList />
      </div>
      <div className="col-sm">
        <AddForm />
      </div>
    </div>
  );
};
export default App;
