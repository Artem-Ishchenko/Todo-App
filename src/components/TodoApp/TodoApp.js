import React, { Component } from "react";

import './TodoApp.css'; 

import NewTaskForm from '../NewTaskForm';
import TaskList from '../TaskList';
import Footer from '../Footer'

export default class TodoApp extends Component {

    state = {
        todoData: [
    {text: 'Completed task', id: 1},
    {text: 'Editing task', id: 2},
    {text: 'Active Task', id: 3},
        ]
    }

    deleteItem = (id) => {
        this.setState(({todoData}) => {
            
            const idx = todoData.findIndex((el) => el.id === id);

            const newArray = [
                ...todoData.slice(0, idx),
                ...todoData.slice(idx + 1)
            ];
            return {
                todoData: newArray
            }

        })
    }

    render() {
        return (
            <section className="todoapp">
                <header className="header">
                    <h1>todos</h1>
                    <NewTaskForm />
                </header>
                <section className="main">
                    <TaskList 
                        todoData={this.state.todoData}
                        onDeleted={this.deleteItem}/>
                    <Footer />
                </section>
            </section>
        )
    }
}