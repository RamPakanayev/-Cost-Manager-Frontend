import React from "react";
import spentTotal from "./components/spentTotal";
//import "bootstrap/dist/css/bootstrap.min.css";

const App = () => {
  return (
    <div className="container">
      <h1 className="mt-3">Cost Manager Frontend </h1>
      <div className="col-sm">
        <spentTotal />
      </div>
    </div>
  );
};
export default App;
