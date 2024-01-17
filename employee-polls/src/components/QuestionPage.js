import {connect} from "react-redux";
import {useParams} from "react-router-dom";
import AnsweredPoll from "./AnsweredPoll";
import UnansweredPoll from "./UnansweredPoll";
import PropTypes from "prop-types";
import NotFound from "./NotFound";

const withRouter = (Component) => {
    return (props) => {
        let params = useParams();
        return <Component {...props} router={{params}}/>;
    };
}

const QuestionPage = (props) => {

    if (props.question === null || props.question === undefined) {
        return <NotFound props={props.id} />
    }

    const author = props.users[props.question.author];
    const avatar = author.avatarURL;

    const answeredOne = props.question.optionOne.votes.includes(props.authedUser);
    const answeredTwo = props.question.optionTwo.votes.includes(props.authedUser);

    return <div className="question-page">
        <h3>Question</h3>
        <img src={avatar} alt={`Avatar of ${props.question.author}`} className="avatar"/>
        <div className="posted-by">Posted by: {author.name}</div>

        { (answeredOne || answeredTwo) && <AnsweredPoll question={props.question} users={props.users} answeredOne={answeredOne} /> }
        { (!answeredOne && ! answeredTwo && <UnansweredPoll question={props.question} authedUser={props.authedUser} /> )}
    </div>
}

const mapStateToProps = ({authedUser, questions, users}, props) => {
    const {id} = props.router.params;

    return {
        id, authedUser: authedUser, question: questions[id], users: users,
    }
};

export default withRouter(connect(mapStateToProps)(QuestionPage));

QuestionPage.propTypes = {
    question: PropTypes.object.isRequired,
    users: PropTypes.object.isRequired,
    authedUser: PropTypes.string.isRequired,
    id: PropTypes.string,
}
