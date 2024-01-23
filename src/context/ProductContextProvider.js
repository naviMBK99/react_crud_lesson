import axios from "axios";
import React, { createContext, useState } from "react";
import { API } from "../helpers/const";
export const productContext = createContext(); //* хранит в себе весь функционал
const ProductContextProvider = ({ children }) => {
  const [todos, setTodos] = useState([]);
  //* children это говорит о том что весь функционал будет доступен всем дочерним жлементам
  //! create
  const addTodo = async (todo) => {
    await axios.post(API, todo);
  };
  //! read
  const getTodos = async () => {
    try {
      // try позволяет детально посмотреть ошибку в консоли
      const { data } = await axios(API);
      console.log(data);
      setTodos(data);
      return data;
    } catch (error) {
      // под копотом error показывает какая ошибка
      console.log(error);
    }
  };

  // ! delete

  const values = {
    addTodo,
    getTodos,
    todos,
  };
  //* values это объект в котором мы храним все функции и отправляем его, тогда все его фукции доступны дочерним элементам

  return (
    <productContext.Provider value={values}>{children}</productContext.Provider>
  );
};

export default ProductContextProvider;
//* как этот файл понимает кто его дочерний элемент? в APP.js мы оборачивает тот файл, который будет дочерим, в нашем случае это APP, теперь всем нашим дочерним элементам (всем файлам) доступны все написанные здесь функции.
