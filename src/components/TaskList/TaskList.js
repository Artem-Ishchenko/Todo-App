import React from "react";

import './TaskList.css';

import Task from '../Task'; 

const TaskList = () => {
    
    const createdTime = () => {
        return 'created XX seconds ago'
    }; 

    const props = [
        {text: 'Completed task', id: 1, time: createdTime(), status: 'completed'},
        {text: 'Editing task', id: 2, time: createdTime(), status: 'editing'},
        {text: 'Active Task', id: 3, time: createdTime(), status: 'active'},
    ];

    const elements = props.map((item) => { 
        
        const {id, status, ...itemProps} = item; 

        return (
            <li key={id} className={status}>
                <Task {...itemProps} status={status}/>
            </li>
        ) 
    });

    return (
        <ul className="todo-list">
            { elements }
        </ul>
    )
}

export default TaskList;