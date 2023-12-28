import {connect} from "react-redux";
import {handleInitialData} from "../actions/shared";
import PropTypes from "prop-types";
import Polls from "./Polls";

const Home = () => {

    handleInitialData();

    return (
        <div>
            <div>
                <label>
                    <input type="radio" name="polls" id="unanswered" value="Unanswered" checked/>Unanswered
                </label>
                <label>
                    <input type="radio" name="polls" id="answered" value="Answered"/>Answered
                </label>
            </div>
            <Polls/>
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
