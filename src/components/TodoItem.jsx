import { Button } from "@mui/material";
import React from "react";

const TodoItem = ({ todoName, todoPhone, todoImg }) => {
  return (
    <div className="container_item">
      <div className="container">
        <img src={todoImg} alt="" className="img" />
        <h3>{todoName}</h3>
        <h4>{todoPhone}</h4>
        <Button variant="contained">Delete</Button>
        <Button variant="contained">Edit</Button>
      </div>
    </div>
  );
};

export default TodoItem;
