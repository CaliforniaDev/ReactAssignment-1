const Overview = (props) => {
    const { tasks } = props;
    const listTasks = tasks.map((taskItem) =>
        <li key={taskItem.id}>{taskItem.text}</li>
    );
    return (
        <div>
            <h1>List of Tasks</h1>
            <ul>{listTasks}</ul>
        </div>
    );
}

export default Overview;