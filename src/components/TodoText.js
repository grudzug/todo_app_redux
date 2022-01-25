import { useState } from 'react';
import { useDispatch } from 'react-redux'

export default function TodoText({ todo }) {

    const dispatch = useDispatch()
    const [checked, setChecked] = useState(todo.completed)

    function handleChacked(e) {
        setChecked(e.target.checked)
        dispatch({
            type:"COMPLETE_TODO", 
            payload: {
                completed: e.target.checked, 
                id: todo.id,
            },
        })
    }
    
    return (
        <div style={todo.completed ? {textDecoration: "line-through"} : {}} >
            <input 
                type="checkbox" 
                checked={checked} 
                onChange={e => handleChacked(e)} 
            />
            {todo.text}
        </div>
    )
}