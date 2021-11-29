import React, { Component } from 'react';
import Overview from './components/Overview';
import Header from './components/Header';
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
        id: uniqid(),
      },
      tasks: [
        {
          text: "Setup development environment",
          id: 1,
          completed: true
        },
        {
          text: "Develop website and add content",
          id: 2,
          completed: false
        },
        {
          text: "Deploy to live server",
          id: 3,
          completed: false
        }
      ],
      editing: false
    };
  }
  handleChange = (e) => {
    this.setState(state => ({
      taskInput: {
        text: e.target.value,
        id: state.taskInput.id,
        completed: false
        
      }
    }));
  };

  onSubmitTask = (e) => {
    e.preventDefault();
    this.setState(state => ({
      tasks: state.tasks.concat(state.taskInput),
      taskInput: {
        text: '',
        id: uniqid(),
      },
    }));
    console.log(this.state);
  };

  removeTask = (id) => {
    this.setState(state => ({
      tasks: state.tasks.filter(task => task.id !== id)
    }));
  };
  handleEdit = () => {
    this.setState({
      editing: true
    })
  }
  updateTask = (updatedTitle, id) => {
    this.setState(state => ({
      taskInput: {
        text: state.tasks.map(taskItem => {
          if(taskItem.id === id) {
            taskItem = updatedTitle;
            console.log(taskItem);
          }
          return taskItem;
        })
      }
    }))
  }
  /*
updateTask = (event, updatedTask, id) => {
    event.preventDefault();
    this.setState(state => ({
      tasks: state.tasks.map(task => {
        if (task.id === id) task = updatedTask;
        return task;
      })
    }))
  }
   */
  
  render() {
    const viewMode = {};
    const editMode = {};
    this.state.editing ? viewMode.display = 'none' : editMode.display = 'none';
    const { taskInput, tasks } = this.state;
    return (
      <section className="task-form-container">
        <Header />
        <div className="form-wrapper">
          <div className="list-overview">
            <Overview
              tasks={tasks}
              state={this.state}
              removeTask={this.removeTask}
              editTask={this.handleEdit}
              updateTask={this.updateTask}
            />
          </div>

          <form onSubmit={this.onSubmitTask}>
            <InputGroup size="lg" className="mb-3" hasValidation>
              <FormControl
                id="task-input"
                required
                type="text"
                onChange={this.handleChange}
                value={taskInput.text}
                placeholder="Enter task here"
                aria-label="Enter task"
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
