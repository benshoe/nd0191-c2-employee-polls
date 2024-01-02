import {connect} from "react-redux";
import {useEffect} from "react";
import {handleLogoutUser} from "../actions/authedUser";
import PropTypes from "prop-types";

const Logout = (props) => {

    useEffect(() => {
        const logout = () => {
            const {dispatch} = props;
            dispatch(handleLogoutUser(props.user));
        }

        logout();
    }, [props]);

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

Logout.propTypes = {
    user: PropTypes.string,
    dispatch: PropTypes.func.isRequired
}
