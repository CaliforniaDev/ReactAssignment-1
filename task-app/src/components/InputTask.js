import { Button, InputGroup, FormControl } from 'react-bootstrap';

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
                value={taskInput.text}
                placeholder="Enter task here"
                aria-label="Enter task"
                aria-describedby="basic-addon2"
              />
              <Button type="submit" variant="primary">Add Task</Button>
            </InputGroup>
          </form>
    );
}

export default InputTask;