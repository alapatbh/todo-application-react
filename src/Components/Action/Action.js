import React, { Component } from 'react';

class Action extends Component {
    state={
        todoItemContent: ''
    }

    updateContent= (event)=>{
        this.setState(
            {
                todoItemContent:event.target.value
            }    
        );
        //console.log('[Action.js]->',this.state.todoItemContent);
    }
    
    clearTextArea(){
        this.setState({
            todoItemContent: ''
        });
    }

    render(){
    return <div>
                <textarea onChange={(event)=>this.updateContent(event)} value={this.state.todoItemContent} cols="53" rows="3"/>
                <br/>
                <input onClick={
                    ()=> {this.props.addItem(this.state.todoItemContent);
                    this.clearTextArea()}
                } type="submit" value="Add task"/>
            </div>
    }
}

export default Action;