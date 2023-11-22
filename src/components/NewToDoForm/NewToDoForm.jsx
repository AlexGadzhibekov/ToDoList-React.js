import React, { useState } from "react";
import Button from "../Button/Button";
import Input from "../Input/Input";

import s from './NewToDoForm.module.scss'

export default function NewToDoForm({toDoItems, setToDoItems}){
    const [title, setTitle] = useState('')
    const [text, setText] = useState('')

    const onSubmit = (event) => {
        event.preventDefault()

        const array ={
            id: new Date(),
            title: title,
            text: text,
            date: new Date()
        }

        setToDoItems([...toDoItems, array])
        setText('')
        setTitle('')
    }

    return (
        <form className={s.newToDoForm__container} onSubmit={onSubmit}>
            <Input placeholder='Zagolovok' setInputValue={setTitle} value={title} onChange={(event) => setTitle(event.target.value)}/>
            <Input placeholder='Zametka' setInputValue={setText} value={text} onChange={(event) => setText(event.target.value)}/>
            <Button type={'submit'}>Сохранить</Button>
        </form>
    )
}