import React from 'react'
import  s from './layout.module.css'

const Layout = (props) => {

    const styles = {
        backgroundImage: `url(${props.urlBg}`,
        backgroundColor: `${props.colorBg}`
    }
    return (
        <div className={`${styles} ${s.root}`}  style={{backgroundImage: `url(${props.urlBg}`, backgroundColor: `${props.colorBg}`}}>
            <div className={s.wrapper}>
                <article>
                    <div className={s.title}>
                        <h3>{props.title}</h3>
                        <span className={s.separator}></span>
                    </div>
                    <div className={`${s.desc} ${s.full}`}>
                        <p>{props.descr}</p>
                    </div>
                </article>
            </div>
        </div>
    )
}

export default Layout