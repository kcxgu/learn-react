import AddTask from "./components/AddTask";

function App() {
  return (
    <>
      <h1 className="text-2xl font-bold py-4 pl-6">03 - The Task Tracker</h1>
      <p className="text-xl pl-6">Hi there!</p>
      <div className="flex flex-row items-center">
        <p className="text-xl pl-6">Click</p>
        <AddTask />
        <p className="text-xl my-2">to add a new task</p>
      </div>
    </>
  );
}

export default App;
