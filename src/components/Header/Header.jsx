import React from "react";
import HeaderLogo from "./HeaderLogo";

import s from './Header.module.scss'
export default function Header() {
    return(
    <header className={s.header}>
        <div className={s.container}>
            <div className={s.header__container}>
                <HeaderLogo>Keeper</HeaderLogo>
            </div>
        </div>
    </header>
    ) 
}