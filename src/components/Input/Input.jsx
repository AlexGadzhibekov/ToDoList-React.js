import React from "react";

import s from './Input.module.scss'
export default function Input({placeholder, onChange, value}){
    return <input placeholder={placeholder} onChange={onChange} className={s.input} value={value}/>
}