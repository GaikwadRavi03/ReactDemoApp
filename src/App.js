import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { ToDo } from './ToDo';

export default class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      ToDoList: [{ id: 1, message: "Hello world" },
      { id: 2, message: "Hello planet" },
      { id: 3, message: "Hello earth" },
      { id: 4, message: "Hello universe" }
      ]
    }
  }

  deleteToDo = (id) => {
    var newToDo = this.state.ToDoList.map(object => {
      if (object.id !== id) {
        return object
      }
    }).filter(object => object !== undefined)
    this.setState({ ToDoList: newToDo })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <p>toDo List application</p>
          {
            this.state.ToDoList.map(object => {
              return <ToDo key={object}
                data={object}
                deleteEntry={this.deleteToDo} />
            })
          }
        </header>
      </div>
    );
  }
}
