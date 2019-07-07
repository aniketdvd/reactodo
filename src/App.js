import React from 'react';
import Todos from './components/Todos';
import './App.css';
import AddTodo from './components/AddTodo';
import uuid from 'uuid';

class App extends React.Component {
  state = {
    todos: [
      
    ]
  }

  // Toggling completion state
  markComplete = (id) => {
    this.setState({todos: this.state.todos.map(todo => {
      if(todo.id === id) {
        todo.completed = !todo.completed
      }
      return todo;
    })})
  }

  // deleting todo
  deleteTodo = (id) => {
    this.setState( { todos: [...this.state.todos.filter(todo => todo.id !== id)]} );
  }

  addTodo = (title) => {
    const newTodo = {
      id: uuid.v4(),
      title: title,
      completed: false
    }
    this.setState({todos: [...this.state.todos, newTodo]});
  }

  render(){
    console.log(this.state);
    return (
      <div>
        <div className="app-header">
          <h1>REACTODO.</h1>
        </div>
        <div className="App">
          <AddTodo addTodo = {this.addTodo}/>
          <Todos todos={this.state.todos} markComplete={this.markComplete} deleteTodo = {this.deleteTodo}/>
      </div>
    </div>
    );
  }
}
//added new class

export default App;