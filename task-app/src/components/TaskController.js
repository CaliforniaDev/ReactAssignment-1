import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTimesCircle } from '@fortawesome/free-solid-svg-icons';
import styles from "./TaskController.module.css";



const TasksController = (props) => {
    const { deleteTask, editTask } = props
    const deleteIcon = <FontAwesomeIcon className="task-icon" size="lg" icon={faTimesCircle} />;
    const editIcon = <FontAwesomeIcon className="task-icon" size="lg" icon={faEdit} />

    return (
        <div className={styles.control}>
            <span onClick={deleteTask}>{deleteIcon}</span>
            <span onClick={editTask}>{editIcon}</span>
        </div>
    );
}

export default TasksController;