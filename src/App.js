import React from 'react';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';

const todos = [
  {
    task: 'Organize Garage',
    id: 1528817077286,
    completed: false
  },
  {
    task: 'Bake Cookies',
    id: 1528817084358,
    completed: false
  }
];



class App extends React.Component {
  constructor() {
    super();
    this.state = {
      todos: todos

    };
  }


  //toggling by clicking 
  handleToggle = (selectedTodo) => {
    this.setState({
      ...this.state,
      todos: this.state.todos.map(todo=> {
        if (todo.id === selectedTodo) {
          return{
            ...todo,
            completed: !todo.completed

          }
        }
        return todo;
      })
    });

  }
  


  //adding a todo when click submit
  handleAdd = (props) => {

    const newTodo = {
      task: props,
      id: Date.now(),
      completed: false
    }
    this.setState({
      ...this.state,
      todos: [...this.state.todos, newTodo]
    })
  }

  //toggled todos to be cleared by button
  handleClear = () => {
    this.setState({
      ...this.state,
      todos: this.state.todos.filter(todo => {
        return (todo.completed === false)
      })
    });

  }



  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  render() {
    const {todos} = this.state;


    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <TodoForm handleAdd={this.handleAdd}/>
        <button onClick={this.handleClear}>Clear Completed</button>

        <div>
          <TodoList handleToggle={this.handleToggle}todos={todos}/>
        </div>
      </div>

    );
  }
}

export default App;
