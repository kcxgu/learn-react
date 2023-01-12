import EditTask from "./EditTask";

const ToDo = ({ task, taskList, setTaskList }) => {

    const handleDelete = itemID => {
        let removeIndex = taskList.indexOf(task);
        taskList.splice(removeIndex, 1);
        setTaskList((currentTasks => currentTasks.filter(todo => todo.id !== itemID)))
    }

    return (
        <>
            <div className="flex flex-col items-start justify-start bg-white my-4 ml-6 py-4 px-6 w-3/4 max-w-lg">
                <div className="w-full flex flex-row justify-between">
                    <p className="font-semibold text-xl">{task.projectName}</p>
                    <EditTask task={task} taskList={taskList} setTaskList={setTaskList} />
                </div>
                <p className="text-lg py-2">{task.taskDescription}</p>
                <div className="w-full flex justify-center">
                    <button
                        className="bg-red-500 text-white text-sm uppercase font-semibold py-1.5 px-3 mt-6 mb-1 rounded-lg"
                        onClick={handleDelete}
                    >
                        Delete
                    </button>
                </div>
            </div>
        </>
    )
}

export default ToDo;