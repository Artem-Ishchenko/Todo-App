import React from "react";

import './TodoApp.css'; 

import NewTaskForm from '../NewTaskForm';
import TaskList from '../TaskList';
import Footer from '../Footer'

const TodoApp = () => {
    return (
        <section className="todoapp">
            <header className="header">
                <h1>todos</h1>
                <NewTaskForm />
            </header>
            <section className="main">
                <TaskList />
                <Footer />
            </section>
        </section>
    )
}

export default TodoApp; 
