import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTimesCircle } from '@fortawesome/free-solid-svg-icons';



const Overview = (props) => {
    const { tasks, removeTask } = props;
    const listTasks = tasks.map((taskItem) =>
        <li key={taskItem.id}>
            {taskItem.text} 
            <TasksController onClick={() => removeTask(taskItem.id)} />
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
    const deleteIcon = <FontAwesomeIcon size="lg" icon={faTimesCircle} />;
    const editIcon = <FontAwesomeIcon size="lg" icon={faEdit} />
  
    return (
        <div id="task-icon-container">
            <span onClick={props.onClick}>{deleteIcon}</span> <span>{editIcon}</span>
        </div>
    );
}

export default Overview;