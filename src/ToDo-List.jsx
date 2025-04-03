import React, { useState } from "react";
import "./ToDo.css";
import ListGroup from "react-bootstrap/ListGroup";

export function ToDo() {
  let [list, setList] = useState([]);
  let [item, setItem] = useState("");

  let listAdded = (event) => {
    event.preventDefault();
    if (item.trim()) {
      setList([...list, item]);
      setItem("");
    }
  };
  let editItem = (index) => {
    let newList = [...list];
    newList[index] = prompt("Edit item:", newList[index]);
    setList(newList);
  };
  let deleteItem = (index) => {
    setList([...list.slice(0, index), ...list.slice(index + 1)]);
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
      <div>
        <p>
          {list.map((ele, ind) => {
            return (
              <div key={ind} className="list-Container">
                <input type="checkbox" name="read" id="read" />
                <h1>{ele}</h1>
                <button onClick={() => editItem(ind)}>edit</button>
                <button onClick={() => deleteItem(ind)}>delete</button>
                {/* <ListGroup as="ol" numbered> */}
                  <ListGroup.Item as="li">
                    <input type="checkbox" name="read" id="read" />
                    <h1>{ele}</h1>
                    <button onClick={() => editItem(ind)}>edit</button>
                    <button onClick={() => deleteItem(ind)}>delete</button>
                  </ListGroup.Item>
                {/* </ListGroup> */}
              </div>
            );
          })}
        </p>
      </div>
    </div>
  );
}
