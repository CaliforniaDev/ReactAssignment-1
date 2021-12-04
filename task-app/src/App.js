import React, { Component } from 'react';
import Overview from './components/Overview';
import InputTask from './components/InputTask';
import Header from './components/Header';
import './App.css';
import uniqid from 'uniqid';
import 'bootstrap/dist/css/bootstrap.min.css';


class App extends Component {
  constructor() {
    super();
    this.state = { 
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
      id: uniqid(),
      editing: false
    };
  }
  addTask = task => {
    const newTask = {
      ...task,
      id: this.state.id,
      completed: false
    }
    this.setState({
      tasks: [...this.state.tasks, newTask],
      id: uniqid()
    })
  }
  handleCompletedTask = (id) => {
    this.setState(state => ({
      tasks: state.tasks.map(task => {
        return task.id === id ? 
        { ...task, completed: !task.completed } 
        : task
      }),
    }))
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


  
  render() {
    const viewMode = {};
    const editMode = {};
    this.state.editing ? viewMode.display = 'none' : editMode.display = 'none';
    const { tasks } = this.state;
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
          <InputTask addTask={this.addTask} />
        </div>
        
      </section>
    );
  }
}


export default App;




/*
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