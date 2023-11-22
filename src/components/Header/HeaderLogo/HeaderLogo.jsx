import React from "react";

import s from './HeaderLogo.module.scss'

export default function HeaderLogo(props){
    return <h2 className={s.logo}>{props.children}</h2>
}