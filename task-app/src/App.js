import React, { Component } from 'react';
import Overview from './components/Overview';
import uniqid from 'uniqid';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      taskInput: {
        text: '',
        id: uniqid()
      },
      tasks: []
    };
  }
  handleChange = (e) => {
    this.setState(state => ({
      taskInput: {
        text: e.target.value,
        id: state.taskInput.id
      }
    }));
  };

  onSubmitTask = (e) => {
    e.preventDefault();
    this.setState(state => ({
      tasks: state.tasks.concat(state.taskInput),
      taskInput: {
        text: '',
        id: uniqid()
      },
    }));
  };

  removeTask = (id) => {
    this.setState(state => ({
      tasks: state.tasks.filter(task => task.id !== id)
    }));
  };
  render() {
    const { taskInput, tasks } = this.state;
    return (
      <section className="task-form-container">
        <div className="form-wrapper">
          <div className="list-overview">
            <Overview removeTask={this.removeTask} tasks={tasks} />
          </div>
          <form onSubmit={this.onSubmitTask}>
            <label htmlFor="taskInput">Enter Tasks</label>
            <input value={taskInput.text} onChange={this.handleChange} type="text" id="taskInput"></input>
            <button type="submit">Add Task</button>
          </form>



        </div>
      </section>
    );
  }
}


export default App;
