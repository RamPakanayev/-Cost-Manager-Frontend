import React from "react";
import SpentTotal from "./components/SpentTotal";
import SpentList from "./components/SpentList";
import AddForm from "./components/AddForm";
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
