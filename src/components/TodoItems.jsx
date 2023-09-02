import React, { Fragment, useContext } from "react";
import { AiOutlineDelete } from "react-icons/ai";
import { BiEditAlt } from "react-icons/bi";
import ButtonElement from "./ButtonElement";
import { TodoContext } from "../context/todoContext";

const TodoItems = ({ todoData, id }) => {
  const { isEditHandler, deleteHandler, setEditId } = useContext(TodoContext);
  return (
    <Fragment>
      <div className="todo_content">
        <span>{todoData}</span>
      </div>

      <div className="todo_buttons">
        <ButtonElement
          className="edit_button"
          action={() => {
            isEditHandler(id);
            setEditId(id);
          }}
        >
          <BiEditAlt />
        </ButtonElement>

        <ButtonElement
          className="delete_button"
          action={() => deleteHandler(id)}
        >
          <AiOutlineDelete />
        </ButtonElement>
      </div>
    </Fragment>
  );
};

export default TodoItems;
