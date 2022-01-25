import { v4 as uuidv4 } from 'uuid'

const initialState = []

export function todoSlice(state = initialState, action) {
    switch(action.type) {
        case "ADD_TODO":
            return [...state, {
                id: uuidv4(),
                text: action.payload,
                completed: false
            }]
        case "DELETE_TODO":
            return state.filter(todo => todo.id !== action.payload)
        case "EDIT_TODO":
            const { id, editedText } = action.payload
            return state.map(todo => {
                if (todo.id !== id) {
                    return todo
                }
                return {...todo, text: editedText}
            })
        case "COMPLETE_TODO":
            const { completed } = action.payload
            return state.map(todo => {
                if (todo.id !== action.payload.id) {
                    return todo
                }
                return {...todo, completed: completed}
            })
        default:
            return state
    }
}