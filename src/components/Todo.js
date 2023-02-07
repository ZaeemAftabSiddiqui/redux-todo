import React, { useState } from "react";
import "./todo.css";
import { useSelector, useDispatch } from "react-redux";
import { addTodo, deleteTodo, clearTodo } from "../actions/index";

const Todo = () => {
  const [inputData, setInputData] = useState("");
  const list = useSelector((state) => state.todoReducer.list);
  const dispatch = useDispatch();
  return (
    <div>
      <div className="main-div">
        <div className="child-div">
          <figure>
            <figcaption>ADD Your List Here </figcaption>
          </figure>
          <div className="addItems">
            <input
              type="text"
              placeholder="✍ Add Items.."
              value={inputData}
              onChange={(event) => {
                setInputData(event.target.value);
              }}
            />
            <i
              className="fa fa-plus add-btn"
              onClick={() => dispatch(addTodo(inputData), setInputData(""))}
            ></i>
          </div>
          <div className="showItems">
            {list.map((elem) => {
              return (
                <div className="eachItem" key={elem.id}>
                  <h3>{elem.data}</h3>
                  <div className="todo-btn">
                    <i
                      className="far fa-trash-alt add-btn"
                      title="Delete Item"
                      onClick={() => dispatch(deleteTodo(elem.id))}
                    ></i>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="showItems">
            <button
              className="btn effect04"
              data-sm-link-text="remove All"
              onClick={() => dispatch(clearTodo())}
            >
              <span>Check List</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Todo;
