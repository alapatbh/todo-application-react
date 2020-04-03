import React, { Component } from 'react';
import TodoItem from '../TodoItem/TodoItem.js';
import './TodoList.css';

class TodoList extends Component{

    state={
        contentList: [
            'Read React','Practice React'
        ]
    };

    render(){
        let body= (
            <div >
                {this.state.contentList.map(
                (eachItem,index ) => { 
                    return <li className="listCss"><TodoItem key={index} todoItemContent={eachItem} /></li>    
                    }
                )}
            </div>);

        return <div>
            {body}
        </div>;
    }
}

export default TodoList;