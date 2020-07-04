import React from 'react'
import '../App.css'

function TodoList(prop){

    const doneItem  = (index) => {
        prop.done(index)
    }

    return(
        <ul className="todo_items">
            { prop.todos.map((todo,index) =>

            <div className="todo_item">
                <li style={{opacity : todo.done === false ? 1 : 0.5 }} key={index}>{todo.title}</li>
                <button id="dlt-btn" onClick={()=>doneItem(index)}> Done <span role="img" aria-label="done">👌</span></button>
            </div>
            )}
        </ul>
    )
}
export default TodoList