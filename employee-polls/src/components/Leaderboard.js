import {connect} from "react-redux";
import PropTypes from "prop-types";

const Leaderboard = (props) => {

    return (
        <div className="leaderboard">
            <h1>Leaderboard</h1>
            <table>
                <thead>
                <tr>
                    <td>Name</td>
                    <td># questions asked</td>
                    <td># questions answered</td>
                </tr>
                </thead>
                <tbody>
                {
                    Object.values(props.users)
                        .map(user =>
                            <tr key={user.id}>
                                <td className="user-with-avatar">{user.name}
                                    <img className="avatar-small" src={user.avatarURL} alt={user.name}/></td>
                                <td>{user.questions.length}</td>
                                <td>{Object.keys(user.answers).length}</td>
                            </tr>
                        )
                }
                </tbody>
            </table>
        </div>
    )
}

const mapStateToProps = ({users}) => {
    return {
        users: Object.values(users)
            .toSorted((a, b) => Object.keys(b.answers).length - Object.keys(a.answers).length),
    }
};

export default connect(mapStateToProps)(Leaderboard);

Leaderboard.propTypes = {
    users: PropTypes.array.isRequired,
}
