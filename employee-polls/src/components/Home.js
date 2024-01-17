import {connect} from "react-redux";
import Polls from "./Polls";
import PropTypes from "prop-types";

const Home = (props) => {
    if (props.user) {
        return (
            <div>
                <div className="polls-title">Unanswered polls</div>
                <Polls answered={false}/>
                <div className="polls-title">Answered polls</div>
                <Polls answered={true}/>
            </div>
        )
    }
}

const mapStateToProps = ({authedUser}) => {
    return {
        user: authedUser,
    }
};

export default connect(mapStateToProps)(Home)

Home.propTypes = {
    user: PropTypes.string.isRequired,
}
