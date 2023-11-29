import {connect} from "react-redux";
import {useEffect} from "react";
import {handleLogoutUser} from "../actions/authedUser";

const Logout = (props) => {

    useEffect(() => {
        const logout = () => {
            const {dispatch} = props;
            dispatch(handleLogoutUser(props.user));
        }

        logout();
    }, []);

    return (
        <div>
            You are logged out!
        </div>
        )
}

const mapStateToProps = ({authedUser}) => {
    return {
        user: authedUser
    }
}

export default connect(mapStateToProps)(Logout);
