import {connect} from "react-redux";
import Poll from "./Poll";
import {useLocation, useNavigate, useParams} from "react-router-dom";
import AnsweredPoll from "./AnsweredPoll";
import UnansweredPoll from "./UnansweredPoll";

const withRouter = (Component) => {
    const ComponentWithRouterProp = (props) => {
        let location = useLocation();
        let navigate = useNavigate();
        let params = useParams();
        return <Component {...props} router={{location, navigate, params}}/>;
    }

    return ComponentWithRouterProp;
}
const QuestionPage = (props) => {
    console.log(props.id);

    const avatar = props.users[props.question.author].avatarURL;

    const answeredOne = props.question.optionOne.votes.includes(props.authedUser);
    const answeredTwo = props.question.optionTwo.votes.includes(props.authedUser);

    return <div>
        <h3>Question</h3>
        <img src={avatar} alt={`Avatar of ${props.question.author}`} className="avatar"/>
        <div className="posted-by">Posted by: {props.question.author}</div>

        { (answeredOne || answeredTwo) && <AnsweredPoll question={props.question} users={props.users} answeredOne={answeredOne} /> }
        { (!answeredOne && ! answeredTwo && <UnansweredPoll question={props.question} /> )}
    </div>
}

const mapStateToProps = ({authedUser, questions, users}, props) => {
    const {id} = props.router.params;

    return {
        id, authedUser: authedUser, question: questions[id], users: users,
    }
};

export default withRouter(connect(mapStateToProps)(QuestionPage));
