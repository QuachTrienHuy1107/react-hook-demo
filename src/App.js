import React, { useState } from "react";
import Box from "./components/bt1_colorBox/Box";
import TodoForm from "./components/bt2_todoList/TodoForm";
import TodoList from "./components/bt2_todoList/TodoList";
import "./styles.css";

export default function App() {
  const [todoList, setTodoList] = useState([
    { id: 1, title: "Learn React" },
    { id: 2, title: "Learn Angular" },
    { id: 3, title: "Prepare CV" }
  ]);

  let handleTodoClick = (todo) => {
    console.log(todo.id);
    const index = todoList.findIndex((index) => index.id === todo.id);
    if (index < 0) return;

    //clone ra 1 state mới chứ không được chỉnh sửa trên state cũ
    const newTodo = [...todoList];
    newTodo.splice(index, 1);
    setTodoList(newTodo);
  };

  let handleChangeSubmit = (formValues) => {
    console.log("formValues: ", formValues);
    //Add new todo to current todoList
    const newTodo = {
      id: todoList.length + 1,
      ...formValues //Lấy tất cả các giá trị từ formValues
    };

    const newTodoList = [...todoList];
    newTodoList.push(newTodo);
    setTodoList(newTodoList);
  };

  return (
    <>
      <div className="App">
        {/* <Box /> */}
        <h1>To do list</h1>
        <TodoForm onSubmit={handleChangeSubmit} />
        <TodoList todos={todoList} onTodoClick={handleTodoClick} />
      </div>
    </>
  );
}
