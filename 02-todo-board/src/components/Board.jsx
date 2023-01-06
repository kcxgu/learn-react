const Board = ({ task }) => {
    return (
        <>
            <div className="max-w-lg flex flex-col items-center justify-center border">
                <p>{task}</p>
            </div>
        </>
    )
}

export default Board;