import {useEffect, useState} from "react";
import {handleSelectUser} from "../actions/authedUser";
import {connect} from "react-redux";
import {useNavigate} from "react-router-dom";
import PropTypes from "prop-types";

const LoginPage = (props) => {

    const [user, setUser] = useState('')
    const [targetUrl, setTargetUrl] = useState(null);

    const navigate = useNavigate();

    useEffect(() => {
        // This useEffect would run when the user is redirected to the login page
        const currentUrl = window.location.pathname; // Get the current URL
        if (currentUrl.includes('logout')) {
            setTargetUrl('/');
        } else {
            setTargetUrl(currentUrl); // Save the target URL before login
        }
    }, []);

    const handleOnChange = (e) => {
        e.preventDefault();
        const user = e.target.value;
        setUser(user)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const {dispatch} = props;
        dispatch(handleSelectUser(user));
        navigate(targetUrl);
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

const mapStateToProps = ({users}) => {
    return {
        users: Object.keys(users),
    };
};
export default connect(mapStateToProps)(LoginPage);

LoginPage.propTypes = {
    users: PropTypes.array.isRequired,
    dispatch: PropTypes.func.isRequired,
}
