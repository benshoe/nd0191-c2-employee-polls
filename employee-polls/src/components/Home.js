import {connect} from "react-redux";
import {handleInitialData} from "../actions/shared";
import PropTypes from "prop-types";
import Polls from "./Polls";
import {useState} from "react";

const Home = () => {

    handleInitialData();

    const [answeredPolls, setAnsweredPolls] = useState(false);

    const answered = (e) => {
        const answeredPolls = e.target.value === 'Answered';
        setAnsweredPolls(answeredPolls);
    };

    return (
        <div>
            <form>
                <label>
                        <input type="radio" name="polls" id="unanswered" value="Unanswered" onChange={answered} defaultChecked />Unanswered
                </label>

                <label>
                    <input type="radio" name="polls" id="answered" value="Answered" onChange={answered}/>Answered
                </label>
            </form>
            <Polls answered={answeredPolls}/>
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
