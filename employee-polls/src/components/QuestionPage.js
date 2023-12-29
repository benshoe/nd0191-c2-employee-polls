import {connect} from "react-redux";
import Poll from "./Poll";
import {useLocation, useNavigate, useParams} from "react-router-dom";

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

    const usersAnsweredOne = props.question.optionOne.votes.length;
    const usersAnsweredTwo = props.question.optionTwo.votes.length;
    const numberOfUsers = Object.keys(props.users).length;

    return <div>

        <h3>Question</h3>
        <img src={avatar} alt={`Avatar of ${props.question.author}`} className="avatar"/>
        <div>Posted by: {props.question.author}</div>

        <p>Would you rather:</p>
        <div className="poll-radio">
            <table>
                <thead>
                <td>You answered</td>
                <td>Option</td>
                <td>Number of voters</td>
                <td>Percentage voted</td>
                </thead>
                <tbody>
                    <tr>
                        <td>{answeredOne && <div>X</div>}</td>
                        <td>{props.question.optionOne.text}</td>
                        <td>{props.question.optionOne.votes.length}</td>
                        <td>{parseFloat(usersAnsweredOne/numberOfUsers) * 100}%</td>
                    </tr>
                    <tr>
                        <td>{answeredTwo && <div>X</div>}</td>
                        <td>{props.question.optionTwo.text}</td>
                        <td>{props.question.optionTwo.votes.length}</td>
                        <td>{(usersAnsweredTwo / numberOfUsers) * 100}%</td>
                    </tr>
                </tbody>
            </table>
        </div>

    </div>
}

const mapStateToProps = ({authedUser, questions, users}, props) => {
    const {id} = props.router.params;

    return {
        id, authedUser: authedUser, question: questions[id], users: users,
    }
};

export default withRouter(connect(mapStateToProps)(QuestionPage));
