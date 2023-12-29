import PropTypes from "prop-types";
import {handleAnswerQuestion} from "../actions/questions";
import {useState} from "react";
import {connect} from "react-redux";

const UnansweredPoll = ({question, authedUser, dispatch}) => {

    const [answer, setAnswer] = useState('');

    const handleSaveQuestion = (e) => {
        e.preventDefault();

        dispatch(handleAnswerQuestion({
            authedUser,
            qid: question.id,
            answer: answer
        }))
    };

    const handleChange = (e) => {
        setAnswer(e.target.value);
    };

    return (
        <div>
            <div className="poll-radio">
                <label><input type="radio" name="unansweredPoll" onChange={handleChange} value="optionOne" /> {question.optionOne.text}</label>
                <label><input type="radio" name="unansweredPoll" onChange={handleChange} value="optionTwo" /> {question.optionTwo.text}</label>
            </div>
            <button onClick={(e) => handleSaveQuestion(e)}>Submit</button>
        </div>
    )
}

export default connect()(UnansweredPoll);

UnansweredPoll.propTypes = {
    question: PropTypes.object.isRequired,
    authedUser: PropTypes.string.isRequired,
    dispatch: PropTypes.func.isRequired,
}
