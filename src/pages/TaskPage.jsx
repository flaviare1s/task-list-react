import { useContext } from "react"
import { TaskForm } from "../components/TaskForm"
import { TaskList } from "../components/TaskList"
import { UserSwitcher } from "../components/UserSwitcher"
import { TaskContext } from "../context/TaskProvider"
import { Skeleton, Button } from "@mui/material"
import { AuthContext } from "../context/AuthProvider"

export const TaskPage = () => {
  const { tasks } = useContext(TaskContext)
 
  return (
    <div>
      <div className="greetings">
        <p>Olá!</p>
        <Button variant="contained" type="submit" sx={{ backgroundColor: "#61dafb", color: "black", fontWeight: "bold" }}>
            Sair
        </Button>
      </div>
      <div className="app-container">
        <aside className="sidebar">
          <UserSwitcher />
        </aside>
        <main className="main-content">
          <h1 className="title">TODO List</h1>
          <TaskForm />
          { tasks.length === 0 ? Array.from({length: 2}).map((_, i) => (
            <Skeleton height={50} key={i} />
          )) :
          <TaskList />
          }
        </main>
      </div>
    </div>
  )
}
