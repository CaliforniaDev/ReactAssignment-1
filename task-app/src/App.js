import React, { Component } from 'react';

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
        <form>
          <label htmlFor="taskInput">Enter Tasks</label>
          <input type="text" id="taskInput"></input>
          <button type="submit">Submit Task</button>
        </form>
      </div>
    );
  }
}


export default App;
