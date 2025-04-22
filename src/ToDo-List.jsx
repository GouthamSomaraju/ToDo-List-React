import React, { useState } from "react";
import "./ToDo.css";
import ListGroup from "react-bootstrap/ListGroup";

export function ToDo() {
  let [list, setList] = useState([]);
  let [item, setItem] = useState("");

  const listAdded = (event) => {
    event.preventDefault();
    if (item.trim()) {
      setList([...list, { text: item, checked: false }]);
      setItem("");
    }
  };

  const toggleCheck = (index) => {
    let newList = [...list];
    newList[index].checked = !newList[index].checked;
    setList(newList);
  };

  const editItem = (index) => {
    let newText = prompt("Edit item:", list[index].text);
    if (newText !== null) {
      let newList = [...list];
      newList[index].text = newText;
      setList(newList);
    }
  };

  const deleteItem = (index) => {
    setList(list.filter((_, i) => i !== index));
  };

  return (
    <div>
      <form onSubmit={listAdded} className="form-Container">
        <input
          type="text"
          value={item}
          onChange={(event) => setItem(event.target.value)}
        />
        <button type="submit">ADD</button>
      </form>
      <ListGroup as="ol" >
        {list.map((ele, ind) => (
          <ListGroup.Item as="li" key={ind} className="list-Container">
            <input
              type="checkbox"
              checked={ele.checked}
              onChange={() => toggleCheck(ind)}
            />
            <h1 style={{ textDecoration: ele.checked ? "line-through" : "none" }}>
              {ele.text}
            </h1>
            <button onClick={() => editItem(ind)}>Edit</button>
            <button onClick={() => deleteItem(ind)}>Delete</button>
          </ListGroup.Item>
        ))}
      </ListGroup>
    </div>
  );
}
