import {connect} from "react-redux";
import Poll from "./Poll";
import PropTypes from "prop-types";

const Polls = (props) => {

    const polls = props.questionIds;

    return <div>
        <ul>
            {
                polls.map((id) => (
                    <li key={id}>
                        <Poll id={id}/>
                    </li>
                ))
            }
        </ul>
        {polls.length === 0 && <div>No polls found here</div>}
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


Polls.propTypes = {
    questionIds: PropTypes.array.isRequired,
}
