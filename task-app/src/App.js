import React, { Component } from 'react';

class App extends Component {
  constructor() {
    super();
    this.state = {
      taskInput: { text: ''},
      tasks: []
    };
  }
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
