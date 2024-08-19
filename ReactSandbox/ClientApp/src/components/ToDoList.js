import React, { Component } from 'react';
import ToDoItem from './ToDoItem'

export class ToDoList extends Component {

  constructor(props) {
    super(props);
    this.state = { todoItems: [], loading: true };
  }

  componentDidMount() {
    this.populateTodoData();
  }

  static renderToDoList(todoItems) {
    return (
      <ul>
        {todoItems.map(todoItem =>
          <ToDoItem todoItem={todoItem} />
        )}
      </ul>
    );
  }

  render() {
    let contents = this.state.loading
      ? <p><em>Loading...</em></p>
      : ToDoList.renderToDoList(this.state.todoItems);

    return (
      <div>
        <h1>To Do List</h1>
        {contents}
      </div>
    )
  }

  async populateTodoData() {
    const response = await fetch('tododata');
    const data = await response.json();
    this.setState({ todoItems: data, loading: false });
  }
}