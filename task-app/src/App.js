import React, { Component } from 'react';
import Overview from './components/Overview';
import InputTask from './components/InputTask';
import Header from './components/Header';
import uniqid from 'uniqid';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';


class App extends Component {
  constructor() {
    super();
    this.state = {
      taskInput: {
        title: '',
        id: uniqid(),
      },
      tasks: [
        {
          title: "Setup development environment",
          id: 1,
          completed: true
        },
        {
          title: "Develop website and add content",
          id: 2,
          completed: false
        },
        {
          title: "Deploy to live server",
          id: 3,
          completed: false
        }
      ],
      editing: false
    };
  }
  handleChange = e => {
    this.setState(state => ({
      taskInput: {
        title: e.target.value,
        id: state.taskInput.id,
        completed: false
        
      }
    }));
  };
  handleCompletedTask = (id) => {
    this.setState(state => ({
      tasks: state.tasks.map(task => {
        return task.id === id ? 
        { ...task, completed: !task.completed } 
        : task
      }),
    }))
  };

  onSubmitTask = e => {
    e.preventDefault();
    this.setState(state => ({
      tasks: state.tasks.concat(state.taskInput),
      taskInput: {
        title: '',
        id: uniqid(),
      },
    }));
    console.log(this.state);
  };

  deleteTask = id => {
    this.setState(state => ({
      tasks: [...state.tasks.filter(task => task.id !== id)]
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
        title: state.tasks.map(taskItem => {
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
              deleteTask={this.deleteTask}
              editTask={this.handleEdit}
              updateTask={this.updateTask}
              handleCompletedTask={this.handleCompletedTask}
            />
          </div>
          <InputTask 
          onSubmitTask={this.onSubmitTask} 
          handleChange={this.handleChange} 
          taskInput={taskInput} 
          />
        </div>
        
      </section>
    );
  }
}


export default App;
