import { Button, InputGroup, FormControl } from 'react-bootstrap';

import React, { Component } from 'react';

class InputTask extends Component {
  constructor(props) {
    super(props);
    this.state = {
      taskInput: {
        title: "",
      }
    }
  }
  onChange = e => {
    this.setState(state => ({
      taskInput: {
        [e.target.name]: e.target.value,
        id: state.taskInput.id
      }
    }))
  }
  onSubmitTask = e => {
    e.preventDefault();
    this.state.taskInput.title.trim ?
    this.props.addTask(this.state.taskInput)
    : alert("Please write item");
    this.setState({
      taskInput: {
        title: "",
      },
    });
  }
  render() {
    return (
      <form onSubmit={this.onSubmitTask}>
          <InputGroup size="lg" className="mb-3" hasValidation>
            <FormControl
              id="task-input"
              required
              type="text"
              name="title"
              onChange={this.onChange}
              value={this.state.taskInput.title}
              placeholder="Enter task here"
              aria-label="Enter task"
              aria-describedby="basic-addon2"
            />
            <Button type="submit" variant="primary">Add Task</Button>
          </InputGroup>
        </form>
  );
  }
}

export default InputTask;


/*
const InputTask = props => {
    const { onSubmitTask, handleChange, taskInput } = props;
    return (
        <form onSubmit={onSubmitTask}>
            <InputGroup size="lg" className="mb-3" hasValidation>
              <FormControl
                id="task-input"
                required
                type="text"
                onChange={handleChange}
                value={taskInput.title}
                placeholder="Enter task here"
                aria-label="Enter task"
                aria-describedby="basic-addon2"
              />
              <Button type="submit" variant="primary">Add Task</Button>
            </InputGroup>
          </form>
    );
}
*/