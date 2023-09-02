import "./DummyTodo.css";
import { useState } from "react";
import { Profiler } from "react";

function DummyTodo() {
  const [todos, setTodos] = useState([]);
  const [currentTodo, setCurrentTodo] = useState("");
  const [editCurrentTodo, setEditCurrentTodo] = useState("");
  const [isEdit, setIsEdit] = useState(false);
  const [editId, setEditId] = useState(null);

  const todoInputHandler = (e) => {
    // console.log(e.target.value);
    setCurrentTodo(e.target.value);
  };

  const addTodoHandler = () => {
    if (currentTodo.length === 0) return;
    const uniqueId = new Date().getTime();
    const data = {
      id: uniqueId,
      todo: currentTodo,
    };
    setTodos([...todos, data]);
    setCurrentTodo("");
  };

  const editTodoHandler = (id) => {
    setIsEdit(true);
    const selectTodo = todos.filter((todo) => todo.id === id);

    setEditCurrentTodo(selectTodo[0].todo);
    setEditId(selectTodo[0].id);
  };

  const deleteTodoHandler = (id) => {
    const filteredTodo = todos.filter((todo) => todo.id !== id);
    setTodos(filteredTodo);
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") addTodoHandler();
  };

  const todoEditInputHandler = (e) => {
    setEditCurrentTodo(e.target.value);
  };

  const updateTodoHandler = () => {
    setTodos((prevTodos) =>
      prevTodos.map((t) =>
        t.id === editId ? { ...t, todo: editCurrentTodo } : t
      )
    );
    setEditCurrentTodo("");
    setEditId(null);
    setIsEdit(false);
  };

  const handleEditKeyPress = (e) => {
    if (e.key === "Enter") updateTodoHandler();
  };
  return (
    <Profiler id="MyComponent">
      <div className="App">
        <div className="inner_container">
          <div className="top_inner_container">
            {isEdit ? (
              <>
                <div className="left">
                  <label htmlFor="todo">Update Todo Value</label>
                  <input
                    type="text"
                    id="todo"
                    onChange={todoEditInputHandler}
                    value={editCurrentTodo}
                    onKeyDown={handleEditKeyPress}
                  />
                </div>

                <div className="right">
                  <button className="add_button">
                    <i
                      className="fas fa-edit icon"
                      onClick={updateTodoHandler}
                    ></i>
                  </button>
                </div>
              </>
            ) : (
              <>
                <div className="left">
                  <label htmlFor="todo">Todo</label>
                  <input
                    type="text"
                    placeholder="Enter Todo..."
                    id="todo"
                    onChange={todoInputHandler}
                    value={currentTodo}
                    onKeyDown={handleKeyPress}
                  />
                </div>

                <div className="right">
                  <button className="add_button">
                    <i
                      className="fa fa-paper-plane send_icon icon"
                      aria-hidden="true"
                      onClick={addTodoHandler}
                    ></i>
                  </button>
                </div>
              </>
            )}
          </div>

          <div className="down_inner_container">
            {todos.map((todo) => (
              <div key={todo.id} className="todo_item">
                <div className="todo_data">
                  <span>{todo.todo}</span>
                </div>

                <div className="todo_button_container">
                  <button className="delete_button">
                    <i
                      className="fas fa-edit icon"
                      onClick={() => editTodoHandler(todo.id)}
                    ></i>
                  </button>

                  <button className="delete_button">
                    <i
                      className="fa fa-trash icon"
                      aria-hidden="true"
                      onClick={() => deleteTodoHandler(todo.id)}
                    ></i>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Profiler>
  );
}

export default DummyTodo;
