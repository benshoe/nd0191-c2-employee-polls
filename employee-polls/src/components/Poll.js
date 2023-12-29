import {connect} from "react-redux";
import {Link} from "react-router-dom";

const Poll = (props) => {
    console.log(props);

    const {id, optionOne, optionTwo} = props.question;
    const answeredOne = props.question.optionOne.votes.includes(props.authedUser);
    const answeredTwo = props.question.optionTwo.votes.includes(props.authedUser);

    const answered = answeredOne || answeredTwo;

    return <Link to={`/question/${id}`}>
        {!answered && <div className="question">Would you rather <b>{optionOne.text}</b> or <b>{optionTwo.text}</b>?</div>}
        {answered && answeredOne && <div>You would rather <b>{optionOne.text}</b> than <b>{optionTwo.text}</b></div>}
        {answered && answeredTwo && <div>You would rather <b>{optionTwo.text}</b> than <b>{optionOne.text}</b></div>}
    </Link>
}

const mapStateToProps = ({authedUser, users, questions}, {id}) => {
    const question = questions[id];

    return {
        authedUser,
        question: question,
    }
};

export default connect(mapStateToProps)(Poll);
