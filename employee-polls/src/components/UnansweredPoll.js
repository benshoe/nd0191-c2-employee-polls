import PropTypes from "prop-types";

const UnansweredPoll = ({question}) => {
    return (
        <form>
            <div className="poll-radio">
                <label><input type="radio" name="unansweredPoll"/> {question.optionOne.text}</label>
                <label><input type="radio" name="unansweredPoll"/> {question.optionTwo.text}</label>
            </div>
            <button>Submit</button>
        </form>
    )
}

export default UnansweredPoll;

UnansweredPoll.propTypes = {
    question: PropTypes.object.isRequired,
}
