import React from 'react'

const  TodoList = ({item, index}) => {
    return (
        <>
            <li className="todoList-item" key={index}> <span className="index">{index}</span> {item}</li>
            
        </>
    )
}

export default TodoList
