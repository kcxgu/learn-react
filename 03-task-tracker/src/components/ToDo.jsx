const ToDo = ({ task }) => {
    return (
        <>
            <div className="flex flex-col items-start justify-start bg-white my-4 ml-6 py-4 px-6 w-3/4 max-w-lg">
                <p className="font-semibold text-xl">{task.projectName}</p>
                <p className="text-lg py-2">{task.taskDescription}</p>
            </div>
        </>
    )
}

export default ToDo;