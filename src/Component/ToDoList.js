import React, { Component } from 'react'

class ToDoList extends Component {
    render() {
        return (
            <ol>
                {
                    this.props.items.map(item => (
                        <li key={item.id}>{item.task}</li>
                    ))
                }
            </ol>
        )
    }
}

export default ToDoList