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
                <button id="dlt-btn" style={{display:'flex',justifyContent:'space-evenly'}} onClick={()=>doneItem(index)}><DoneOrUndone situation={todo.done}/><span role="img" aria-label="done">👌</span></button>
            </div>
            )}
        </ul>
    )
}

const DoneOrUndone = (prop) => {
    return(
        <div>
            {prop.situation === true ? <i> Undone</i>: <i>done</i>}
        </div>
    )
}
export default TodoList