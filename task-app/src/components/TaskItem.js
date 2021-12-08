import React from "react";
import styles from "./TaskItem.module.scss";
import TasksController from "./TaskController";

const TaskItem = (props) => {
    const { task, handleCompletedTask, deleteTask } = props;
    return (
        <li className={styles.item}>
            <input 
              type="checkbox"
              className={styles.checkbox}
              checked={task.completed}
              onChange={() => handleCompletedTask(task.id)}
            />
            {task.title}
            <TasksController deleteTask={() => deleteTask(task.id)}/>
            
        </li>
    )
}
export default TaskItem;