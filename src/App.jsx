import "./App.css";
import { TaskForm } from "./components/TaskForm";
import { TaskList } from "./components/TaskList";

function App() {
  return (
    <div>
      <aside>

      </aside>
      <main>
        <h1>TODO List</h1>
        <TaskForm />
        <TaskList />
      </main>
    </div>
  );
}

export default App;
