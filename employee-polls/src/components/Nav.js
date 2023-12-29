import {Link} from "react-router-dom";
import {connect} from "react-redux";
import PropTypes from "prop-types";

const Nav = (props) => {
    return (
        <nav className="nav">
            <ul className="menu">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/polls">My polls</Link></li>
                <li><Link to="/dashboard">Dashboard</Link></li>
                <li><Link to="/logout">Logout {props.user}</Link></li>
            </ul>
        </nav>
    )
}

const mapStateToProps = ({authedUser}) => (
    {
        user: authedUser,
    })


export default connect(mapStateToProps)(Nav);

Nav.propTypes = {
    user: PropTypes.string.isRequired,
}
