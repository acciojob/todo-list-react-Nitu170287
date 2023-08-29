import React, { useState } from "react";
import "./../styles/App.css";
import ToDoItem from "./ToDoItem";

const App = () => {
  const [input, setInput] = useState("");
  const [addedItem, setAddedItem] = useState([]);

  function handleAddBtn() {
    // setAddedItem, ((prevItem)=>[...prevItem, input])
    setAddedItem([...addedItem, { "id": `${input}-${Date.now()}`, input }]);
    console.log(addedItem)
    setInput("");
  }
  function updateTodoItem(id,text){
    
   const editedItem =  addedItem.map((item)=>{
      if(item.id === id){
        return {id,"input":text}
      }else{
        return item
      }
    })
    setAddedItem(editedItem)
  }

  return (
    <div className="to-do-list">
      {/* Do not remove the main div */}
      <div className="add_tasks_section">
      <h1>To Do List</h1>
      <input
        type="text"
        className="tasks_section"
        onChange={(e) => setInput(e.target.value)}
        value={input}
      />
      <button className="add_tasks" onClick={handleAddBtn}>
        Add
      </button>
      </div>
      {addedItem.map((item) => (
        <ToDoItem item={item} key={item.id} updateTodoItem={updateTodoItem} />
      ))}
    </div>
  );
};

export default App;
