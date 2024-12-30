import React, { Component } from "react";
import './Task.css'; 

export default class Task extends Component {
    
    state = {
        done: false,
    }

    onLabelClick = () => {
        this.setState(({done}) => {
            return {
                done: !done
            }
        })
    }
    
    render() {
    const { text, onDeleted } = this.props;
    const { done } = this.state;

    let classNames = ''; 
    
    if (done) {
        classNames += ' completed'; 
        console.log();
    }

    return (
        <li className={classNames}>
            <div className="view">
                <input 
                className="toggle " 
                type="checkbox"
                onClick={ this.onLabelClick }/>
                <label>
                    <span className="description">{text}</span>
                    <span className="created">created 15 seconds</span>
                </label>
                <button className="icon icon-edit"></button>
                <button 
                    className="icon icon-destroy"
                    onClick={onDeleted}>
                </button>
            </div>
        </li>
    )
    }
};