import React from 'react';
import './TodoItem.css';

const TodoItem = (props) => {
    return <span>
        {props.todoItemContent}
    </span>
}

export default TodoItem;