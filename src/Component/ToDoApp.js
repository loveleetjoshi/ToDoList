import React, { Component } from 'react'
import ToDoList from './ToDoList';

class ToDoApp extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             items: [],
             task: ''
        }
        
    }

    handleChange = (e) =>{
        this.setState({task: e.target.value});
    }

    handleSubmit = (e) =>{
        e.preventDefault();
        const newItem={
            task: this.state.task,
            id: Date.now()
        };

        this.setState( (prevState, props)=> ({
            items: prevState.items.concat(newItem),
            task: ''
        }));
        console.log(this.state.items);
    }
    
    render() {
        return (
            <div>
                <h1>To Do List App</h1>
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor='new-todo'>What needs to be done?</label><br></br>
                    <input id='new-todo' onChange={this.handleChange} value={this.state.task}/><br></br>
                    <button>Add Task{this.state.items.length + 1}</button>
                </form>
                <ToDoList items={this.state.items}/>
            </div>
        )
    }
}

export default ToDoApp
