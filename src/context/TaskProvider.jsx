import { createContext, useEffect, useState } from "react";
import axios from "../../service/api.js";

export const TaskContext = createContext();

export const TaskProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [task, setTask] = useState([]);
  const [userId, setUserId] = useState("1");

  useEffect(() => {
    async function fetchUserAndTask() {
      const userRes = await axios.get(`/users/${userId}`);
      setUser(userRes.data);
      console.log(userRes.data)

      const taskRes = await axios.get(`/tasks?userId=${userId}`);
      setTask(taskRes.data);
      console.log(taskRes.data)
    }
    fetchUserAndTask();
  }, [userId]);

  return (
    <TaskContext.Provider value={{}}>
      {children}
    </TaskContext.Provider>
  );
};
