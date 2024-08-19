import React from 'react';

const ToDoItem = ({ todoItem }) => {
  return <li><input id='{todoItem.id}' type="checkbox" checked={todoItem.isDone} />{todoItem.name}</li>
}

export default ToDoItem;