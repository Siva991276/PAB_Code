import React, { useState } from "react";
import "./FinalTodosList.css"

 

function TodosList() {

    const tempList = [
        {
            text: "Welcome",
            id: "1",
        },
        {
            text: "Hello World",
            id: "2",
        },
        {
            text: "Hello World",
            id: "3",
        },
    ]
    const [list, setList] = useState ([]);
  const [message, setMessage] = useState({
    text: "",
    id: "",
  });
  const changeMessage = (e) => {
    setMessage({
      ...message,
      text: e.target.value,
    });
  };
  return (
    <div>
      <form>
        <input
          type="text"
          name="message"
          id="message"
          placeholder="Enter Some Text"
          className="mt-5"
          style={{ border: "1px solid black" }}
          value={message.text}
          onChange={changeMessage}
        />
        <button className="addbtn121">Add</button>
      </form>
    </div>
  );
}
export default TodosList;
