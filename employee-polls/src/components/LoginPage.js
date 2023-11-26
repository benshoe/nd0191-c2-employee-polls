import {useState} from "react";
import {handleSelectUser, setAuthedUser} from "../actions/authedUser";
import {connect} from "react-redux";

const LoginPage = (props) => {

    const [user, setUser] = useState('')

    const handleOnChange = (e) => {
        e.preventDefault();
        const user = e.target.value;
        setUser(user)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const {dispatch} = props;
        console.log(`The logged in user is: ${user}`);
        dispatch(handleSelectUser(user));
    }

    return (
        <>
            <h1>Log in as user:</h1>
            <form onSubmit={handleSubmit}>
                <select onChange={handleOnChange}>
                    <option key="nouser"></option>
                    {props.users.map(user => <option key={user}>{user}</option>)}
                </select>
                <button type="submit">Login</button>
            </form>
        </>
    )
}

export default connect()(LoginPage);
