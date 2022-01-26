export default function ClearStorage() {

    function handleClear() {
        localStorage.clear() // clearing localstorage
        alert("LocalStorage törölve, kérlek frissíts")
    }

    return (
        <button 
            onClick={handleClear}
            className="clear-btn" >
            Localstorage törlése &#10060;
        </button>
    )
}