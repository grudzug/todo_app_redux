import editIcon from "../icons/edit_icon.svg"
import saveIcon from "../icons/save_icon.svg"

export default function EditButton( {isEditing, setIsEditing} ) {

    // initialy showing "edit icon", if editing showing "save icon"
    return (
        <button 
            className="icon" 
            onClick={() => setIsEditing(!isEditing)}
        >
            {isEditing ? 
                <img src={saveIcon} className="icon" alt="save icon" /> 
                :   <img src={editIcon} className="icon" alt="edit icon" />}
        </button>
    )
}