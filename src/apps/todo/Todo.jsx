import React, { Fragment, useContext } from "react";
import "./Todo.css";
import { BiSolidSend } from "react-icons/bi";
import { FiEdit } from "react-icons/fi";
import FormContainer from "../../components/FormContainer";
import TodoItems from "../../components/TodoItems";
import { TodoContext } from "../../context/todoContext";

const Todo = () => {
  const {
    todos,
    currentTodo,
    setCurrentTodo,
    editCurrentTodo,
    setEditCurrentTodo,
    addTodo,
    isEdit,
    updateTodo,
  } = useContext(TodoContext);

  return (
    <Fragment>
      <div className="todo">
        <h1 className="todo__title"> TODO APP</h1>
        <div className="todo_top_inner_container">
          {isEdit ? (
            <Fragment>
              <FormContainer
                label={"Update Todo"}
                placeholder={""}
                className={"update_button"}
                icon={<FiEdit />}
                value={editCurrentTodo}
                setValue={setEditCurrentTodo}
                action={updateTodo}
              />
            </Fragment>
          ) : (
            <Fragment>
              <FormContainer
                label={"Todo"}
                className={"add_button"}
                placeholder={"Enter Todo..."}
                icon={<BiSolidSend />}
                value={currentTodo}
                setValue={setCurrentTodo}
                action={addTodo}
              />
            </Fragment>
          )}
        </div>
        <div className="todo_down_inner_container">
          {todos?.map((todo) => (
            <div key={todo.id} className="todo_item">
              <TodoItems todoData={todo.todo} id={todo.id} />
            </div>
          ))}
        </div>
      </div>
    </Fragment>
  );
};

export default Todo;
