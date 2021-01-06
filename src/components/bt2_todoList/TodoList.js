import React from "react";
import PropTypes from "prop-types";

TodoList.PropTypes = {
  todos: PropTypes.array,
  onTodoClick: PropTypes.func
};

TodoList.defaultProps = {
  todos: [],
  onTodoClick: null
};

function TodoList(props) {
  const { todos, onTodoClick } = props;

  let handleClick = (todo) => {
    if (onTodoClick) {
      onTodoClick(todo);
    }
  };

  return (
    <>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id} onClick={() => handleClick(todo)}>
            {todo.title}
          </li>
        ))}
      </ul>
    </>
  );
}

export default TodoList;
