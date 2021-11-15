const Overview = (props) => {
    const { tasks } = props;
    const listTasks = tasks.map((taskItem, index) =>
        <li key={index}>{taskItem.text}</li>
    );
    return (
        <div>
            <h1>List of Tasks</h1>
            <ul>{listTasks}</ul>
        </div>
    );
}

export default Overview;