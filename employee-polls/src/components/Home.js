import {connect} from "react-redux";
import Polls from "./Polls";
import PropTypes from "prop-types";
import {useState} from "react";

const Home = (props) => {
    const [answeredPolls, setAnsweredPolls] = useState(false);


    const answered = (e) => {
        const answeredPolls = e.target.value === 'Answered';
        setAnsweredPolls(answeredPolls);
    };

    if (props.user) {
        return (
            <div>
                <form>
                    <label>
                        <input type="radio" name="polls" id="unanswered" value="Unanswered" onChange={answered}
                               defaultChecked/>Unanswered
                    </label>

                    <label>
                        <input type="radio" name="polls" id="answered" value="Answered" onChange={answered}/>Answered
                    </label>
                </form>
                <Polls answered={answeredPolls}/>
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
