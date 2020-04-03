import React from 'react';
import './TodoItem.css';

const TodoItem = (props) => {
    return <p>
        {props.todoItemContent} <span  onClick={props.deleteEachItem}  className="deleteSymbol">X</span>
    </p>
}

export default TodoItem;