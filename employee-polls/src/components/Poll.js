import {connect} from "react-redux";
import {Link} from "react-router-dom";

const Poll = (props) => {
    console.log(props);

    const {id, optionOne, optionTwo} = props.question;

    return <Link to={`/question/${id}`}>
        <div className="question">Would you rather <b>{optionOne.text}</b> or <b>{optionTwo.text}</b></div>
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
