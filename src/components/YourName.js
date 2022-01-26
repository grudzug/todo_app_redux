import { useRef } from 'react'
import { useDispatch } from 'react-redux'

export default function YourName() {

    const nameInput = useRef("")
    const dispatch = useDispatch()

    //saving username to user state
    function saveYourName() {
        dispatch({ type: "SET_USER", payload: nameInput.current.value })
    }

    return (
        <>        
            <div className="your-name">
                <p>Nevem:</p>
                <form onSubmit={saveYourName}>
                    <input type="text" ref={nameInput} required placeholder="Írd ide a neved"/>
                    <button type="submit">Mentés</button>
                </form>
            </div>
        </>
    )
}