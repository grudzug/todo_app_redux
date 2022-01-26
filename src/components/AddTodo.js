import { useState } from 'react';
import { useDispatch } from 'react-redux'

export default function AddTodo() {
    
    const dispatch = useDispatch()

    // saving add-todo input field value
    const [todo, setTodo] = useState("")

    // adding new "todo" to todos when form submitted
    function handleSubmit(e) {
        e.preventDefault()
        dispatch({
            type: "ADD_TODO",
            payload: todo
        })
        setTodo("")
    }

    return (
        <form onSubmit={handleSubmit}>
                <div className="add-todo">
                    <input 
                        type="text" 
                        value={todo} 
                        onChange={e => setTodo(e.target.value)}
                        placeholder="Feladat hozzáadása"
                        required 
                    />
                    <button type="submit">
                        +
                    </button>
                </div>
        </form>
    )
}