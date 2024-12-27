import React from "react";
import './Task.css'; 

const Task = (props) => {
    const {text, time, status} = props;
    let element = ""; 

    if (status === 'editing') {
        element = (
            <input type="text" className="edit" defaultValue="Editing task"/>
        )
    } 

    return (
        <>
            <div className="view">
                <input className="toggle" type="checkbox"/>
                <label>
                    <span className="description">{text}</span>
                    <span className="created">{time}</span>
                </label>
                <button className="icon icon-edit"></button>
                <button className="icon icon-destroy"></button>
            </div>
            {element}
        </>
    )
};

export default Task;
