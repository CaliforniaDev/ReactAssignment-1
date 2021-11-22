import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
const Overview = (props) => {
    const { tasks } = props;
    console.log(tasks);
    const trashIcon = <FontAwesomeIcon icon={faTrashAlt} />
    const listTasks = tasks.map((taskItem) =>
        <li key={taskItem.id}>{taskItem.text} {trashIcon}</li>
    );
    
    return (
        <div>
            <FontAwesomeIcon icon={faTrashAlt} />
            <h1>List of Tasks</h1>
            <ul>{listTasks}</ul>
        </div>
    );
}

export default Overview;