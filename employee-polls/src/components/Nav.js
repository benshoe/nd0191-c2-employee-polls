import {Link} from "react-router-dom";

const Nav = () => {
    return (
        <nav className="nav">
            <ul className="menu">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/polls">My polls</Link></li>
                <li><Link to="/dashboard">Dashboard</Link></li>
                <li><Link to="/logout">Logout</Link></li>
            </ul>
        </nav>
    )
}

export default Nav;
