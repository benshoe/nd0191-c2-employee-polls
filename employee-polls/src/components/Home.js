import {connect} from "react-redux";
import {handleInitialData} from "../actions/shared";
import PropTypes from "prop-types";
import Polls from "./Polls";

const Home = () => {

    handleInitialData();

    return (
        <div>
            <div className="unanswered-polls">Unanswered polls</div>
                <Polls answered={false} />
            <div className="answered-polls">Answered polls</div>
                <Polls answered={true} />
        </div>
    )
}

const mapStateToProps = ({authedUser}) => (
    {
        user: authedUser,
    })

export default connect(mapStateToProps)(Home)

Home.propTypes = {
    user: PropTypes.string.isRequired,
}
