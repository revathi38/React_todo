import React from "react";
import Todo from "./apps/todo/Todo";
import { TodoContextProvider } from "./context/todoContext.js";

const App = () => {
  return (
    <TodoContextProvider>
      <Todo />
    </TodoContextProvider>
  );
};

export default App;
