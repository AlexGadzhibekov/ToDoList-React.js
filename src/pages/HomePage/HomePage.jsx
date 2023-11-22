import React, { useState } from "react";
import Button from "../../components/Button";
import Header from "../../components/Header";
import NewToDoForm from "../../components/NewToDoForm";
import ToDoList from "../../components/ToDoList/ToDoList";

import s from './HomePage.module.scss'

export default function HomePage(){
    const[toDoItems, setToDoItems] = useState([
        {
            id: new Date(),
            title: 'anime',
            text: 'some text',
            date: new Date()
        },
        {
            id:new Date(),
            title: 'anime',
            text: 'some text',
            date: new Date()

        },
        {
            id:new Date(),
            title: 'anime',
            text: 'some text',
            date: new Date()
        }
    ])
    return(
        <div>
            <Header/>
            <NewToDoForm toDoItems={toDoItems} setToDoItems={setToDoItems}/>
            <ToDoList toDoItems={toDoItems}/>
        </div>
    ) 
}