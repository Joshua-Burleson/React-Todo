import React from 'react';
import Pending from '../Styles/Pending';
import Completed from '../Styles/Completed';

class ToDo extends React.Component {
    constructor(props){
        super(props);
        this.toDoItem = props.item;
    }

    render() {
        return (
            <div>
            {
                this.toDoItem.completed ? <Completed key={this.toDoItem.id}><span>{this.toDoItem.task}</span></Completed>
                                    : <Pending key={this.toDoItem.id}>
                                        <span>{this.toDoItem.task}</span>
                                    </Pending>
                
            }
            <button id={this.toDoItem.id} onClick={e => this.props.toggleComplete(e.target.id)}>{this.toDoItem.completed ? `Mark Incomplete` : `Mark Complete`}</button>
            </div>
        );
    }
}

export default ToDo;