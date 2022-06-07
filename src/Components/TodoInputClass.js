import React from "react";
import TodoContext from "../context/TodoContext";

function TodoInput() {
  constructor(props){
    super(props);
    this.state = {
      newTodo: ''
    }
  }

  handleChange = ({target}) => {
    this.setState({
      newTodo: target.value,
    });
  }

  handleClick = () => {

  }


  const { newTodo } = this.state
  return (
    <section>
      <label htmlFor="addTodo">
        Insira uma tarefa:
        <input
          value={newTodo}
          onChange={this.handleChange}
          type="text"
          name="newTodo"
          id="newTodo"
        />
      </label>
      <button onClick={this.handleClick}>Adicionar Tarefa</button>
    </section>
  );
}

export default TodoInput;