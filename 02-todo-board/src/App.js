import { useState } from "react";
import Board from "./components/Board";
import Input from "./components/Input";

function App() {
  const [taskList, setTaskList] = useState([]);

  return (
    <div className="px-12">
      <div className="flex flex-col items-center justify-center py-8 gap-4">
        <h1 className="text-xl font-semibold">02 - To Do Board</h1>
        <Input taskList={taskList} setTaskList={setTaskList} />
      </div>
      <div className="flex flex-col gap-4 sm:grid sm:grid-cols-3 px-4 sm:px-8 md:px-10 lg:px-12">
        {taskList.map((task, index) =>
          <Board
            key={index}
            task={task}
          />
        )}
      </div>
    </div>
  );
}

export default App;
