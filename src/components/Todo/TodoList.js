import React, { useState, useEffect } from "react";
import classes from "./TodoList.module.css";
import { useSelector } from "react-redux";
import * as actionTypes from "../store/action";
import { useDispatch } from "react-redux";

const TodoList = () => {
  const notes = useSelector((state) => state.notes);
  const dispatch = useDispatch();
  console.log(notes);

  const [selectedValue, setSelectedValue] = useState("");
  const [filterList, setFilterList] = useState(notes);

  const removeHandler = (id) => {
    console.log(id, "was clicked");
    dispatch({
      type: actionTypes.REMOVE_TODO,
      playload: id,
    });
  };
  const doneHandler = (id) => {
    console.log(id, "done was clicked");
    dispatch({
      type: actionTypes.DONE_NOTE,
      playload: id,
    });
  };
  useEffect(() => {
    if (selectedValue === "true") {
      setFilterList(notes.filterL((item) => item.done === !!selectedValue));
    } else if (selectedValue === "false") {
      setFilterList(notes.filter((item) => item.done !== !!selectedValue));
    } else {
      setFilterList(notes);
    }
  }, [selectedValue, notes]);

  const filterHandler = (e) => {
    setSelectedValue(e.target.value);
  };

  return (
    <div className={classes.todos}>
      <h1>Notes:</h1>
      <select name="done" onChange={filterHandler} defaultValue="all">
        <option value="true">Done</option>
        <option value="false">Not done</option>
        <option value="all">All</option>
      </select>
      {notes.map((note) => {
        console.log(`note:${note.title}`);
        return (
          <div
            onClick={() => doneHandler(note.id)}
            className={`${classes.todo} ${
              note.done ? classes.done : classes.notDone
            }`}
            key={note.id}
          >
            <h2>{note.title}</h2>
            <p>{note.task}</p>
            <span
              onClick={() => removeHandler(note.id)}
              className={`material-icons ${classes.delete}`}
            >
              delete
            </span>
          </div>
        );
      })}
    </div>
  );
};

export default TodoList;
