import {connect} from "react-redux";
import Poll from "./Poll";
import {useLocation, useNavigate, useParams} from "react-router-dom";

const withRouter = (Component) => {
    const ComponentWithRouterProp = (props) => {
        let location = useLocation();
        let navigate = useNavigate();
        let params = useParams();
        return <Component {...props} router={{location, navigate, params}} />;
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
        <div>Posted by: {props.question.author}</div>

        <p>Would you rather:</p>
        <form className="poll-radio">
            <label><input type="radio" name="answer" checked={answeredOne} />{props.question.optionOne.text}</label>
            <label><input type="radio" name="answer" checked={answeredTwo} />{props.question.optionTwo.text}</label>
        </form>

    </div>
}

const mapStateToProps = ({authedUser, questions, users}, props) => {
    const {id} = props.router.params;

    return {
        id,
        authedUser: authedUser,
        question: questions[id],
        users,
    }
};

export default withRouter(connect(mapStateToProps)(QuestionPage));
