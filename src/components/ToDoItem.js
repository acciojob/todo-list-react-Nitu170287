import React, { useState } from "react";

const ToDoItem = ({ item, updateTodoItem }) => {
  const [isEdit, setIsEdit] = useState(false);
const [editInput, setEditInput] = useState(item.input)

  return (
    <div className="list-Item">
      {isEdit ? (
        <>
          <input type="text" value={editInput} onChange={(e)=>setEditInput(e.target.value)} />
          <button onClick={()=>{updateTodoItem(item.id, editInput);setIsEdit(false)}}>Save</button>
        </>
      ) : (
        <>
          <div className="task">{item.input}</div>
          <button className="edit" onClick={()=>setIsEdit(true)}>Edit</button>
          <button className="delete">Delete</button>
        </>
      )}
    </div>
  );
};

export default ToDoItem;
