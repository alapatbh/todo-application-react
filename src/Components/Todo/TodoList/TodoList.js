import React, { Component } from 'react';
import TodoItem from '../TodoItem/TodoItem.js';
import './TodoList.css';

class TodoList extends Component{

    state={
        contentList: [
            'Read React','Practice React','Work on java'
        ]
    };

    deleteTodoItemHandler = (itemIndex) => {
        const contentListDup = this.state.contentList.slice();
        contentListDup.splice(itemIndex,1);
        this.setState({
            contentList:contentListDup
        });
    }
     
    componentWillReceiveProps(nextProps) {
        let contentListDup= this.state.contentList.slice();
            contentListDup=[...contentListDup,nextProps.addItem];
            console.log(contentListDup);
            this.setState({     contentList: contentListDup});  
            
    }

    addItemToState = () =>{
        if(this.props.addItem!==''){
            let contentListDup= this.state.contentList.slice();
            contentListDup=[...contentListDup,this.props.addItem];
            console.log(contentListDup);
            this.setState({
                contentList:contentListDup
            });
        }
    }

    render(){
        
        let body= (
            <div >
                {this.state.contentList.map(
                (eachItem,index ) => { 
                    return (
                            <TodoItem key={index} 
                            todoItemContent={eachItem} 
                            deleteEachItem={() => this.deleteTodoItemHandler(index)} 
                            />
                            )    
                    }
                )}
            </div>);

        return <div>
            {body}
        </div>;
    }
}

export default TodoList;