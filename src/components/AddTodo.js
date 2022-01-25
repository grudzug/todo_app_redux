import { useState } from 'react';
import { useDispatch } from 'react-redux'

export default function AddTodo() {
    
    const dispatch = useDispatch()
    const [todo, setTodo] = useState("")

    function handleSubmit(e) {
        e.preventDefault()
        dispatch({type: "ADD_TODO", payload: todo})
        setTodo("")
    }

    return (
        <form onSubmit={handleSubmit}>
                <div className="input-wrapper">
                    <input 
                        type="text" 
                        className="new-todo" 
                        value={todo} 
                        onChange={e => setTodo(e.target.value)}
                        placeholder="Feladat hozzáadása"
                        required 
                    />
                    <button type="submit" className="add">+</button>
                </div>
            </form>
    )
}