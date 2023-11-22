import React from "react";
import ToDoItem from "../ToDoItem/ToDoItem";

import s from './ToDoList.module.scss'

export default function ToDoList({toDoItems}){
    return(
        <ul className={s.container}>
            {toDoItems.map((toDoItem) => (
                <ToDoItem key={toDoItem.id} id={toDoItem.id} title={toDoItem.title} text={toDoItem.text} date={toDoItem.date}/>
            ))}
        </ul>
    )
}