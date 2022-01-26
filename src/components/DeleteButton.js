import deleteIcon from "../icons/trashcan_icon.svg"
import { useDispatch } from 'react-redux'


export default function DeleteButton({ todo }) {

    const dispatch = useDispatch()

    return (
        <button 
            className="icon" 
            onClick={() => dispatch({ type: "DELETE_TODO", payload: todo.id })}>
            <img src={deleteIcon} className="icon" alt="delete icon" 
        />
        </button>
    )
}