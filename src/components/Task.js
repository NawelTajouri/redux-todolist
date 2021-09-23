import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { DELETE, EDIT, DONE } from '../redux/action';
import 'bootstrap/dist/css/bootstrap.min.css';
import './task.css';


const Task = ({ id, value, isDone }) => {
  const [edit, setEdit] = useState(null);
  const [editText, setEditText] = useState(value);

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const dispatch = useDispatch();

  // delete tasks:
  const handleDelete = (id) => {
    dispatch({
      type: DELETE,
      payload: id,
    });
  };
  // edit tasks:
  const submitEdit = (id) => {
    dispatch({
      type: EDIT,
      payload: {
        id: id,
        newText: editText
      },
    });
    setEdit();
  
  };

  const toggle = (id) => {
    dispatch({
      type: DONE,
      payload: id,
    });
  };
  return (
    <div className="MyToDo">
      <input type="checkbox" defaultChecked={isDone} className="done-icon" onClick={() => toggle(id)} ></input>
      {edit === id ? (
        <div>
          <input className="addtext"
            type="text"
            value={editText}
            onChange={(e) => setEditText(e.target.value)}
            
          />
          <button
            className="btn-success "
            onClick={() => submitEdit(id)}
          >
            Submit Edit
          </button>

           
        </div>
      ) : (
        <div className={`task ${isDone && "completed"}`}>
          <span>{value}</span>
        </div>
      )}

      <button className="delete-btn " onClick={() => handleDelete(id)}>Delete</button>
      <button className="edit-btn " onClick={() => setEdit(id)} >Edit</button>

    
    </div>
  );
};

export default Task;