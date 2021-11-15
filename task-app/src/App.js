import React, { Component } from 'react';
import Overview from './components/Overview';

class App extends Component {
  constructor() {
    super();
    this.state = {
      taskInput: { text: ''},
      tasks: []
    };
    this.handleChange = this.handleChange.bind(this);
    this.onSubmitTask = this.onSubmitTask.bind(this);
  }
  handleChange = (e) => {
    this.setState({
      taskInput: {
        text: e.target.value
      }
    });
  };

  onSubmitTask = (e) => {
    e.preventDefault();
    this.setState({
      tasks: this.state.tasks.concat(this.state.taskInput),
      taskInput: { text: ''}
    });
  };
  render() {
    const { taskInput, tasks } = this.state;
    return (
      <div>
        <form onSubmit={this.onSubmitTask}>
          <label htmlFor="taskInput">Enter Tasks</label>
          <input value={taskInput.text} onChange={this.handleChange} type="text" id="taskInput"></input>
          <button type="submit">Add Task</button>
        </form>
        <Overview tasks={tasks}/>
      </div>
    );
  }
}


export default App;
