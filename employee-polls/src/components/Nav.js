import {Link} from "react-router-dom";
import {connect} from "react-redux";
import PropTypes from "prop-types";

const Nav = (props) => {
    return (
        <nav className="nav">
            <ul className="menu">
                <li key="home"><Link to="/">Home</Link></li>
                {props.user ? <li key="leaderboard"><Link to="/leaderboard">Leaderboard</Link></li> : null }
                {props.user ? <li key="newpoll"><Link className="link-button" to="/add">New poll</Link></li> : null }
                <h1 className="nav-title">Employee polls</h1>
                {props.user ? <li key="logout"><Link to="/logout">Logout {props.user}</Link></li> : null}
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
