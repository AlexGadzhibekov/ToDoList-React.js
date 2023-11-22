import React from "react";

import s from './ToDoItem.module.scss'

export default function ToDoItem({title, text, id, date}){
    console.log(date)
    console.log(typeof(date))
    return(
        <div className={s.container}>
            <h5>{title}</h5>
            <p>{text}</p>
            <p className={s.data}>{date.getDate()}.{date.getMonth()}.{date.getFullYear()}</p>
        </div>
    )
}