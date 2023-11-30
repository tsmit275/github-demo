import { useState } from "react"

function Input({ setUser }) {
    const [userName, setUserName] = useState('')


    const handleSubmit = async (e) => {
        //events: event propogation: bubble..etc
        e.preventDefault()
        const url = encodeURI(`https://api.github.com/users/${userName}`)
        const response= await fetch(url)
        const data = await response.json()
        setUser(data)
        setUserName('')
        //encodeURI means that if any special characters are entered in the username
        //they will be encoded properly
    }
    const clear = () => {
        setUserName('')
        setUser(null)
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input value={userName} onChange={(e) => setUserName(e.target.value)} placeholder="username"/>
                <input type='submit'/>
            </form>
            <button onClick={clear}>Clear</button>
        </div>
    )
} 

export default Input 