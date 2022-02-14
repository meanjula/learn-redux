import React, { useState } from "react";
import classes from "./AddTodo.module.css";
import Button from "../UI/Button";
import * as actionTypes from "../store/action";
import { useDispatch } from "react-redux";
//useDIspatch for dispacthing action

const AddTodo = () => {
  const [todo, setTodo] = useState({ title: "", task: "" });
  const dispatch = useDispatch();
  const changeHandler = (e) => {
    const { name, value } = e.target;

    setTodo((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const addHandler = (e) => {
    e.preventDefault();
    console.log(todo);
    dispatch({
      type: actionTypes.ADD_TODO,
      playload: todo, //playload is the colln of data to send out
    }); //send out the action
  };

  return (
    <form onSubmit={addHandler} className={classes.input}>
      <div>
        <label>Title</label>
        <input type="text" onChange={changeHandler} />
      </div>
      <div>
        <label>Task</label>
        <input type="text" onChange={changeHandler} />
      </div>
      <Button type="submit">Add Task</Button>
    </form>
  );
};

export default AddTodo;
