import React from "react";
import { TiDelete } from "react-icons/ti";

const SpentItem = (props) => {
  return (
    <li className="list-group-item d-flex justify-content-between align-items-center">
      {props.name}
      <div>
        <span className="">£{props.cost}</span>
        <TiDelete size="1.5em"></TiDelete>
      </div>
    </li>
  );
};

export default SpentItem;
