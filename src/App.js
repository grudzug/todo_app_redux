import TodoList from './components/TodoList';
import ClearStorage from './components/ClearStorage';
import YourName from './components/YourName';
import { useSelector } from 'react-redux'

const selectUser = (state) => state.user

function App() {

    // getting user data
    const user = useSelector(selectUser)

    return (
        <div>
            <h1>Todo app</h1>

            {/* If user not exist, ask its name, otherwise show todo list */}

            {!user ?
                <YourName /> 
                :   <TodoList user={user.name} />}
            <ClearStorage />
        </div>
    );
}

export default App;
