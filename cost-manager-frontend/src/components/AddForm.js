import React from "react";

const AddForm = () => {
  return (
    <form>
      <div className="row">
        <div className="col-sm">
          <label for="name">Name</label>
          <input
            required="required"
            type="text"
            className="form-control"
            id="name"
          ></input>
        </div>

        <div className="col-sm">
          <label htmlFor="catgory">Catgory</label>
          <select id="catgory">
            <option label="Resturants">Resturants</option>
            <option label="Shopping">Shopping</option>
            <option label="Bills">Bills</option>
            <option label="Other">Other</option>
          </select>
        </div>

        <div className="col-sm">
          <label for="cost">Cost</label>
          <input
            required="required"
            type="text"
            className="form-control"
            id="cost"
          ></input>
        </div>
      </div>
      <div className="row">
        <div className="col-sm">
          <button type="submit" className="btn btn-primary mt-3">
            Save
          </button>
        </div>
      </div>
    </form>
  );
};

export default AddForm;
