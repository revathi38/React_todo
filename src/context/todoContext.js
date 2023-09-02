import { createContext, useState } from "react";
import { v4 as uuidv4 } from "uuid";

export const TodoContext = createContext();

export const TodoContextProvider = ({ children }) => {
  const [todos, setTodos] = useState([
    {
      id: "1",
      todo: "Welcome...",
    },
    {
      id: "2",
      todo: "Have fun!",
    },
  ]);

  const [currentTodo, setCurrentTodo] = useState("");
  const [editCurrentTodo, setEditCurrentTodo] = useState("");
  const [isEdit, setIsEdit] = useState(false);
  const [editId, setEditId] = useState(null);

  const addTodo = () => {
    console.log("object");
    const uniqueValue = uuidv4();
    const data = {
      id: uniqueValue,
      todo: currentTodo,
    };
    setTodos([...todos, data]);
    setCurrentTodo("");
  };

  const isEditHandler = (id) => {
    setIsEdit(true);

    const selectedTodo = todos.find((todo) => todo.id === id);

    setEditCurrentTodo(selectedTodo.todo);
  };

  const deleteHandler = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const updateTodo = () => {
    setTodos((prevTodos) =>
      prevTodos.map((t) =>
        t.id === editId ? { ...t, todo: editCurrentTodo } : t
      )
    );

    setEditCurrentTodo("");
    setIsEdit(false);
    setEditId(null);
  };

  return (
    <TodoContext.Provider
      value={{
        todos,
        currentTodo,
        setCurrentTodo,
        editCurrentTodo,
        setEditCurrentTodo,
        addTodo,
        isEdit,
        isEditHandler,
        deleteHandler,
        setEditId,
        updateTodo,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
};
