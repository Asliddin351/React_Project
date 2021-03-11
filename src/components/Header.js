import React from 'react'
import  s from './header.module.css'


const Header = (props) => {


    return (
        <div className={s.root}>
            <div className={`${s.container} ${s.forest}`}>
                <h1>{props.title}</h1>
                <p>{props.descr}</p>
            </div>
        </div>
    )
}

export default Header