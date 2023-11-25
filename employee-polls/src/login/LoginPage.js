import {useState} from "react";

const LoginPage = (users) => {

    const [user, setUser] = useState('')

    function handleOnChange(e) {
        e.preventDefault();
        const user = e.target.value;
        setUser(user)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(`The logged in user is: ${user}`);
    }

    return (
        <>
            <h1>Log in as user:</h1>
            <form onSubmit={handleSubmit}>
                <select onChange={handleOnChange}>
                    {users.users.map(user => <option key={user}>{user}</option>)}
                </select>
                <button type="submit">Login</button>
            </form>
        </>
    )
}

export default LoginPage
