import React from "react";
import TasksController from "./TaskController";

const TaskItem = (props) => {
    const { task, handleCompletedTask, deleteTask } = props;
    return (
        <li>
            <input 
              type="checkbox" 
              checked={task.completed}
              onChange={() => handleCompletedTask(task.id)}
            />
            {task.title}
            <TasksController deleteTask={() => deleteTask(task.id)}/>
            
        </li>
    )
}
export default TaskItem;