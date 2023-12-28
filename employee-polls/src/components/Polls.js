import {connect} from "react-redux";
import Poll from "./Poll";

const Polls = (props) => {

    return <div>
        <h3 className="polls">Polls</h3>
        <ul>
            {
                props.questionIds.map((id) => (
                    <li key={id}>
                        <Poll id={id}/>
                    </li>
                ))
            }
        </ul>
    </div>
}

const mapStateToProps = ({authedUser, questions, users}, {answered}) => {
    const answeredIds = Object.keys(users[authedUser].answers);

    const questionIds = Object.keys(questions).filter(id => answered ? answeredIds.includes(id) : !answeredIds.includes(id)).sort(
        (a, b) => questions[b].timestamp - questions[a].timestamp);
    return {
        questionIds
    }
};

export default connect(mapStateToProps)(Polls);
