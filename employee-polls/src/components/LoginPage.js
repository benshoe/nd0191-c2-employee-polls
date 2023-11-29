import {useState} from "react";
import {handleSelectUser} from "../actions/authedUser";
import {connect} from "react-redux";
import {useNavigate} from "react-router-dom";
import PropTypes from "prop-types";

const LoginPage = (props) => {

    const [user, setUser] = useState('')

    const navigate = useNavigate();

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
        navigate('/');
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

LoginPage.propTypes = {
    users: PropTypes.array.isRequired,
    dispatch: PropTypes.func.isRequired,
}
