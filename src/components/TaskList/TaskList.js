import React, { Component } from "react";

import './TaskList.css';

import Task from '../Task'; 

export default class TaskList extends Component {

    render() {
        const { todoData, onDeleted } = this.props; 
        const elements = todoData.map((item) => { 
        
            const {id, ...itemProps} = item; 
             return (
                <Task 
                    key={id} 
                    {...itemProps}
                    onDeleted={() => onDeleted(id)} />
            ) 
        });
        
        return (
            <ul className="todo-list">
                { elements }
            </ul>
        )
    }
}