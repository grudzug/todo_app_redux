import EditButton from "./EditButton"
import DeleteButton from "./DeleteButton"
import TodoText from "./TodoText"
import { useState } from "react"
import { useSpring, animated } from 'react-spring'
import { useDispatch } from 'react-redux'


export default function Card({ todo }) {

   const dispatch = useDispatch()

    // if editing, show the input field, otherwise not
    const [isEditing, setIsEditing] = useState(false)

    // very basic animation for showing new todo cards
    const animation = useSpring({
        from: { rotateX: 90 },
        to: { rotateX: 0 },
    })

    return (
        <animated.li style={animation}>
            {isEditing ? 
                <input type="text"
                        className="edit-input"
                        onChange={e => dispatch({
                            type: "EDIT_TODO", 
                            payload:{
                                editedText: e.target.value,
                                id: todo.id
                            },
                        })}
                /> 
                :  <TodoText todo={todo}/>
            }
            <EditButton isEditing={isEditing} setIsEditing={setIsEditing}/>
            <DeleteButton todo={todo} />
        </animated.li>
    )
}