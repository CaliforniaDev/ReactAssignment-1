import React from "react";
import styles from "./TaskItem.module.scss";
import TasksController from "./TaskController";

const TaskItem = (props) => {
    const { handleCompletedTask, deleteTask } = props;
    const { id, completed, title } = props.task;
    const completedStyle = {
        fontStyle: "italic",
        color: "#595959",
        opacity: 0.4,
        textDecoration: "line-through",
        transition: "0.5s",
    }
    return (
        <li className={styles.item}>
            <input 
              type="checkbox"
              className={styles.checkbox}
              checked={completed}
              onChange={() => handleCompletedTask(id)}
            />
            <span style={completed ? completedStyle : null}>
            {title}
            </span>
            <TasksController deleteTask={() => deleteTask(id)}/>
            
        </li>
    )
}
export default TaskItem;