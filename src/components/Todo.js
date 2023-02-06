import React from "react";
import "./todo.css";

const Todo = () => {
  return (
    <div>
      <div className="main-div">
        <div className="child-div">
          <figure>
            <figcaption>ADD Your List Here </figcaption>
          </figure>
          <div className="addItems">
            <input type="text" placeholder="✍ Add Items.." />
            <i className="fa fa-plus add-btn"></i>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Todo;
