import { useContext, useEffect, useState } from "react"
import { TaskContext } from "../context/TaskProvider"
import axios from "../service/api"

export const UserSwitcher = () => {
  const [users, setUsers] = useState([])
  const {user, setUserId} = useContext(TaskContext)

  useEffect(() => {
    async function fetchUser() {
      const res = await axios.get("/users")
      setUsers(res.data)
    }
    fetchUser()
  }, [])

  return (
    <div className="user-switcher">
      <h3>Selecione o usuário</h3>
      <ul>
        {users.map(us => (
          <li key={us.id}>
            <button
              onClick={() => setUserId(us.id)}
              style={{
                backgroundColor: user?.id === us.id ? "#61dafb" : "#eee"
              }}
            >
              {us.name}
            </button>
          </li>
        ))}
      </ul>
    </div>
  )
}
