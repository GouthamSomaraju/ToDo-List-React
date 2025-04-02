import React, { useState } from 'react';
import './ToDo.css';


// Inline styles
const styles = {
    container: {
        width: '300px',
        margin: '20px auto',
        padding: '20px',
        borderRadius: '10px',
        boxShadow: '0px 0px 10px rgba(0,0,0,0.1)',
        textAlign: 'center',
        backgroundColor: '#fff',
    },
    heading: {
        color: '#333',
    },
    form: {
        display: 'flex',
        justifyContent: 'space-between',
        marginBottom: '10px',
    },
    input: {
        flex: 1,
        padding: '8px',
        marginRight: '10px',
        borderRadius: '5px',
        border: '1px solid #ccc',
    },
    addButton: {
        padding: '8px 15px',
        border: 'none',
        backgroundColor: '#28a745',
        color: 'white',
        borderRadius: '5px',
        cursor: 'pointer',
    },
    list: {
        listStyleType: 'none',
        padding: 0,
    },
    listItem: {
        display: 'flex',
        justifyContent: 'space-between',
        padding: '8px',
        margin: '5px 0',
        backgroundColor: '#f4f4f4',
        borderRadius: '5px',
    },
    deleteButton: {
        background: 'none',
        border: 'none',
        color: 'red',
        fontSize: '16px',
        cursor: 'pointer',
    },
};

function ToDoList() {
    let [list, setList] = useState([]); // Store list as an array
    let [item, setItem] = useState(''); // Store input value

    let listAdded = (event) => {
        event.preventDefault();
        if (item.trim()) { // Prevent adding empty items
            setList([...list, item]); // Append new item to the list
            setItem(''); // Clear input field
        }
    };

    let deleteItem = (index) => {
        setList([
            ...list.slice(0, index),   // Keep elements before the index
            ...list.slice(index + 1)   // Keep elements after the index
        ]);
    };
    

    return (
        <div style={styles.container}>
            <h2 style={styles.heading}>To-Do List</h2>
            <form onSubmit={listAdded} style={styles.form}>
                <input
                    type="text"
                    name="list"
                    id="list"
                    value={item}
                    onChange={(event) => setItem(event.target.value)}
                    style={styles.input}
                    placeholder="Enter a task..."
                />
                <button type="submit" style={styles.addButton}>Add</button>
            </form>
            <ul style={styles.list}>
                {list.map((todo, index) => (
                    <li key={index} style={styles.listItem}>
                        {todo}
                        <button style={styles.deleteButton} onClick={() => deleteItem(index)}>❌</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}


export default ToDoList;

export function ToDo(){
    let [list,setList]=useState([])
    let [item,setItem]=useState('')

    let listAdded = (event) => {
        event.preventDefault();
        if (item.trim()) { 
            setList([...list, item]); 
            setItem(''); 
        }
    };
    let editItem = (index) => {
        let newList = [...list];
        newList[index] = setItem();
        setList(newList);
    }
    return(
       <div>
        <form onSubmit={listAdded}>
            <input type="text" value={item} onChange={(event)=>setItem(event.target.value)} />
            <button type='submit'>ADD</button>
        </form>
        <div>
            <p>
                {list.map((ele,ind)=>{
                    return <div key={ind} className='list-Container'> 
                        <input type="checkbox" name="read" id="read" />
                        <h1>{list}</h1>
                        <button onClick={editItem}>edit</button>
                        <button>delete</button>
                    </div>
                    
            
                })}
            </p>
        </div>
       </div>
    )
}