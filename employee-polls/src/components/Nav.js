import {Link} from "react-router-dom";
import {connect} from "react-redux";
import PropTypes from "prop-types";

const Nav = (props) => {
    return (
        <nav className="nav">
            <ul className="menu">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/leaderboard">Leaderboard</Link></li>
                <li><Link className="link-button" to="/add">New poll</Link></li>
                <h1 className="nav-title">Employee polls</h1>
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
    user: PropTypes.string,
}
