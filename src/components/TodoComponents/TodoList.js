// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from 'react';
import ToDo from './Todo';
import ToDoForm from './TodoForm';

class ToDoList extends React.Component {
    constructor(){
        super();

        this.state = {
            itemsToDo: [  {
                task: 'Organize Garage',
                id: 1528817077286,
                completed: false
              },
              {
                task: 'Bake Cookies',
                id: 1528817084358,
                completed: false
              }],
            
            nextId: 152881708435
        };

    };

    setStorage = itemArray => localStorage.setItem('itemsToDo', JSON.stringify(itemArray));

    addItem = task => {
        const updatedItemsToDo =  [...this.state.itemsToDo, {
            task,
            id: this.state.nextId,
            completed: false
        }];
        this.setState({
            itemsToDo: updatedItemsToDo,
            nextId: this.state.nextId + 1
        });

        this.setStorage(updatedItemsToDo);
    };

    toggleComplete = (itemId) => {
        const selectedItem = this.state.itemsToDo.find(item => Number(item.id) === Number(itemId));
        selectedItem.completed = ! selectedItem.completed;

        const updatedItems = this.state.itemsToDo.map(item => item.id === selectedItem.id ? selectedItem : item);

        this.setState({
            itemsToDo: updatedItems,
            nextId: this.state.nextId
        });

        this.setStorage(updatedItems);
    };


    deleteCompleted = () => {
        const updatedItemsToDo = this.state.itemsToDo.filter(item => !item.completed);
        this.setState({
            itemsToDo: updatedItemsToDo,
            nextId: this.state.nextId
        });
        this.setStorage(updatedItemsToDo);
        }

    render(){
        return (
            <>
            {this.state.itemsToDo && this.state.itemsToDo.map(item => <ToDo key={item.id} item={item} toggleComplete={this.toggleComplete}/>)}
            <ToDoForm addItem={this.addItem} deleteCompleted={this.deleteCompleted}/>
            </>
        )
    }
}

export default ToDoList;