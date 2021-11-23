import React, { Component } from 'react';
import Overview from './components/Overview';
import uniqid from 'uniqid';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, InputGroup, FormControl } from 'react-bootstrap';

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
            <InputGroup size="lg" className="mb-3">
            <FormControl 
            onChange={this.handleChange}
            value={taskInput.text}
            placeholder="Enter task here"
            aria-label="Recipient's username"
            aria-describedby="basic-addon2"
            />
            <Button type="submit" variant="primary">Add Task</Button>
          </InputGroup>
          </form>
          


        </div>
      </section>
    );
  }
}


export default App;
