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

    return <div>
        <div>Question</div>
        <p>Would you rather:</p>
        <Poll id={props.id} />
    </div>
}

const mapStateToProps = ({authedUser, questions, users}, props) => {
    console.log(props)
    console.log(props.router)
    const {id} = props.router.params;

    return {
        id,
        authedUser: authedUser,
        question: questions[id]
    }
};

export default withRouter(connect(mapStateToProps)(QuestionPage));
