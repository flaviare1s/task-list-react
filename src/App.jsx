import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { Login } from "./pages/Login";
import { TaskPage } from "./pages/TaskPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/tasks" element={<TaskPage />} />
    </Routes>
  );
}

export default App;
