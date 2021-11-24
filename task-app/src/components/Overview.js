import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTimesCircle } from '@fortawesome/free-solid-svg-icons';



const Overview = (props) => {
    const { tasks, removeTask, editTask } = props;
    const listTasks = tasks.map((taskItem) =>
        <li key={taskItem.id}>
            {taskItem.text} 
            <TasksController editTask={editTask} removeTask={() => removeTask(taskItem.id)} />
        </li>
    );
    return (
        <div>
            <h1>List of Tasks</h1>
            <ul>{listTasks}</ul>
        </div>
    );
}

const TasksController = (props) => {
    const { removeTask, editTask } = props;
    const deleteIcon = <FontAwesomeIcon className="task-icon" size="lg" icon={faTimesCircle} />;
    const editIcon = <FontAwesomeIcon className="task-icon" size="lg" icon={faEdit} />
  
    return (
        <div id="task-icon-container">
            <span onClick={removeTask}>{deleteIcon}</span> 
            <span onClick={editTask}>{editIcon}</span>
        </div>
    );
}

export default Overview;