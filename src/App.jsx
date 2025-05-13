import "./App.css";
import { TaskForm } from "./components/TaskForm";
import { TaskList } from "./components/TaskList";

function App() {
  return (
    <div className="app-container">
      <aside className="sidebar">

      </aside>
      <main className="main-content">
        <h1 className="title">TODO List</h1>
        <TaskForm />
        <TaskList />
      </main>
    </div>
  );
}

export default App;
