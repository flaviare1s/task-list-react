import { useRef, useState } from "react";

export const TaskForm = () => {
  const [title, setTitle] = useState("");
  const inputRef = useRef();

  console.log(title)

  return (
    <form>
      <input
        ref={inputRef}
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Digite uma tarefa"
      />
      <button>+</button>
    </form>
  );
};
