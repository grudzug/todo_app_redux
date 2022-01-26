import TodoList from './components/TodoList';
import ClearStorage from './components/ClearStorage';
import YourName from './components/YourName';
import { useSelector } from 'react-redux'

const selectUser = (state) => state.user

function App() {

    const user = useSelector(selectUser)

    return (
        <div>
            <h1>Todo app</h1>
            {!user ?
                <YourName /> 
                :   <TodoList user={user.name} />}
            <ClearStorage />
        </div>
    );
}

export default App;
