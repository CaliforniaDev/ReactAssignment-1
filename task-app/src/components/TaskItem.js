import React from "react";

const TaskItem = (props) => {
    const { task } = props;
    return (
        <li>
            <input type="checkbox" checked={task.completed}/>
            {task.text}
        </li>
    )
}
export default TaskItem;