import React from 'react'
import TodoList from './TodoList'


class Todo extends React.Component{
    inputRef = React.createRef()
    state = {
        todo : []
    }

    handleSubmit = (e) => {
        e.preventDefault()

        if (this.inputRef.current.value !== "") {
            let newTodo = {
                title : this.inputRef.current.value,
                done:false,
            }

            this.setState({
                todo : [...this.state.todo,newTodo]
            })

            e.target.reset()
        }else {
            alert("you should write something ! ")
        }



    }

    doneItem = (id) =>{

        const todo = [...this.state.todo]
        for(let i=0 ; i<todo.length;i++) {
            if (i===id){
                todo[i].done = true
            }
        }
        this.setState({
            todo
        })
    }

    deleteAll = () => { this.setState({ todo : [] })}

    render(){
        return(
            <div>
                <label> Add Todos here  </label> <br/>
                <form action="" onSubmit={this.handleSubmit}>
                    <input
                        type="text"
                        placeholder="Todo"
                        name="Todo"
                        ref={this.inputRef}
                    />
                    <button type="submit"> Todo </button>
                </form>
                <TodoList done={this.doneItem} todos={this.state.todo}/>
                <button id="rmv-all" onClick={this.deleteAll}>Remove all Todos</button>
            </div>
        )
    }
}

export default Todo