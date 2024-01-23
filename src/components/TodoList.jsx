import React, { useContext, useEffect } from "react";
import TodoItem from "./TodoItem";
import { productContext } from "../context/ProductContextProvider";

const TodoList = () => {
  const { getTodos, todos } = useContext(productContext);
  useEffect(() => {
    getTodos();
  }, []);
  return (
    <div>
      {todos.map((elem) => (
        <TodoItem {...elem} key={elem.id} />
      ))}
    </div>
  );
};

export default TodoList;
