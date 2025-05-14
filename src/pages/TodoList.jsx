import { TaskForm } from "../components/TaskForm"
import { TaskList } from "../components/TaskList"
import { UserSwitcher } from "../components/UserSwitcher"

export const TodoList = () => {
  return (
    <div className="app-container">
      <aside className="sidebar">
        <UserSwitcher />
      </aside>
      <main className="main-content">
        <h1 className="title">TODO List</h1>
        <TaskForm />
        <TaskList />
      </main>
    </div>
  )
}
