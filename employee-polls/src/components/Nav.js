import {Link} from "react-router-dom";
import {connect} from "react-redux";
import PropTypes from "prop-types";

const Nav = (props) => {
    return (
        <nav className="nav">
            <ul className="menu">
                <li key="home"><Link to="/">Home</Link></li>
                <li key="leaderboard"><Link to="/leaderboard">Leaderboard</Link></li>
                <li key="newpoll"><Link className="link-button" to="/add">New poll</Link></li>
                <h1 className="nav-title">Employee polls</h1>
                <li key="logout"><Link to="/logout">Logout {props.user}</Link></li>
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
