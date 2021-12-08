import React, { Component } from 'react';
import Overview from './components/Overview';
import InputTask from './components/InputTask';
import Header from './components/Header';
import { v4 as uuidv4 } from 'uuid';
import 'bootstrap/dist/css/bootstrap.min.css';


class App extends Component {
  constructor() {
    super();
    this.state = {
      tasks: [
        {
          title: "Setup development environment",
          id: uuidv4(),
          completed: true
        },
        {
          title: "Develop website and add content",
          id: uuidv4(),
          completed: false
        },
        {
          title: "Deploy to live server",
          id: uuidv4(),
          completed: false
        }
      ],
      id: uuidv4(),
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
      id: uuidv4()
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
    console.log(this.state.tasks);
    return (
      <section className="Container">
        <div className="Container--inner">
        <Header />
        <InputTask addTask={this.addTask} />
        <Overview
          tasks={tasks}
          state={this.state}
          deleteTask={this.deleteTask}
          editTask={this.handleEdit}
          updateTask={this.updateTask}
          handleCompletedTask={this.handleCompletedTask}
        />
        
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