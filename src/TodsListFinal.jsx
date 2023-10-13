import React, { useState } from "react";

const TodsListFinal = () => {
  const tempList = [];
  const [List, setList] = useState([]);
  const [Message, setMessage] = useState({
    text: "",
    id: "",
  });

  const changeMessage = (e) => {
    setMessage({
      ...Message,
      text: e.target.value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    let newTodo = {
      text: Message.text,
      id: new Date().getTime().toString(),
    };
    setList([...List, newTodo]);
    setMessage({
      text: "",
      id: "",
    });
  };

  const handleDelete = (id) => {
    let newTodosDelete = List.filter((eachItem) => {
      return eachItem.id !== id;
    });
    setList(newTodosDelete);
  };
  return (
    <div>
      <form>
        <input
          type="text"
          className="mt-3"
          style={{ border: "1px solid black" }}
          name="message"
          id="message"
          placeholder="Enter Some Text"
          value={Message.text}
          onChange={changeMessage}
        />
        <button
          type="submit"
          className="p-2 m-2"
          style={{ borderRadius: "5px" }}
          onClick={handleSubmit}
        >
          Add
        </button>
      </form>
      <hr />
      <ul>
        {List.map((eachItem) => {
          const { text, id } = eachItem;
          return (
            <li key={id}>
              <span>{text}</span>
              <button className="m-2 p-1">Edit</button>
              <button className="m-2 p-1" onClick={() => handleDelete(id)}>
                Delete
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default TodsListFinal;
