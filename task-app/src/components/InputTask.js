import { FormControl } from 'react-bootstrap';
import React, { Component } from 'react';
import { faPlusCircle } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

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
    const addTaskIconBtn = <FontAwesomeIcon className="addTaskBtn" size="lg" icon={faPlusCircle} />
    return (
      <form className="TaskForm" onSubmit={this.onSubmitTask}>
            <FormControl
              required
              className="TaskForm--input shadow-none"
              type="text"
              name="title"
              onFocus={e => { e.target.select() }}
              onChange={this.onChange}
              value={this.state.taskInput.title}
              placeholder="Enter task here"
              aria-label="Enter task"
              aria-describedby="basic-addon2"
            />
            <button className="TaskForm--submit" type="submit">{addTaskIconBtn}</button>
       
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