import '../styles/TodoList.css'
import Card from './Card'
import AddTodo from './AddTodo'
import FilterButton from './FilterButton'
import { useState } from 'react'
import { useSelector } from 'react-redux'

// setting up filtering logic
const filterMap = {
    Minden: () => true,
    Hátralévő: todo => !todo.completed,
    Elkészült: todo => todo.completed
}
const filterNames = Object.keys(filterMap)

const selectTodos = (state) => state.todos

export default function TodoList({ user }) {

    const todos = useSelector(selectTodos)
    const [filter, setFilter] = useState('Minden')

    return (
        <div className="todo-list">
            <h2>Szia {user}! &#9996;</h2>
            {filterNames.map(name => (
                <FilterButton
                    key={name}
                    name={name}
                    isActive={name === filter}
                    setFilter={setFilter}
                />
            ))}
            {todos?.length > 0 ? <ul>
                {todos.filter(filterMap[filter]).map(todo => (
                    <Card key={todo.id} todo={todo}/>
                ))}
            </ul> : <h2>Add hozzá az első feladatod!</h2>}
            <AddTodo />
        </div>
    )
}