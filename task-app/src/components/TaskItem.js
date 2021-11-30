import React from "react";

const TaskItem = (props) => {
    const { task, handleCompletedTask } = props;
    return (
        <li>
            <input 
              type="checkbox" 
              checked={task.completed}
              onChange={() => handleCompletedTask(task.id)}
            />
            {task.text}
        </li>
    )
}
export default TaskItem;