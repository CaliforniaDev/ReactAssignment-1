import TaskItem from './TaskItem';



const Overview = (props) => {
    const { tasks, handleCompletedTask, 
            deleteTask, controlledInput, 
            handleEditingProp, setEditingTask } = props;
    return (
        <div>
            <ul>
                {tasks.map(task => (
                    <TaskItem 
                      key={task.id} 
                      task={task}
                      handleCompletedTask={handleCompletedTask}
                      deleteTask={deleteTask} 
                      controlledInput={controlledInput}
                      handleEditingProp={handleEditingProp}
                      setEditingTask={setEditingTask}
                    />
                ))}
            </ul>
        </div>
    );
}

export default Overview;