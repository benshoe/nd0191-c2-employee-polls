import PropTypes from "prop-types";

const AnsweredPoll = ({question, users, answeredOne}) => {

    const usersAnsweredOne = question.optionOne.votes.length;
    const usersAnsweredTwo = question.optionTwo.votes.length;
    const numberOfUsers = Object.keys(users).length;
    const answeredTwo = !answeredOne;

    return (
        <div className="poll-radio">
            <table>
                <thead>
                <tr>
                    <td>You answered</td>
                    <td>Option</td>
                    <td>Number of voters</td>
                    <td>Percentage voted</td>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td>{answeredOne && <div>X</div>}</td>
                    <td>{question.optionOne.text}</td>
                    <td>{question.optionOne.votes.length}</td>
                    <td>{parseFloat(usersAnsweredOne / numberOfUsers) * 100}%</td>
                </tr>
                <tr>
                    <td>{answeredTwo && <div>X</div>}</td>
                    <td>{question.optionTwo.text}</td>
                    <td>{question.optionTwo.votes.length}</td>
                    <td>{(usersAnsweredTwo / numberOfUsers) * 100}%</td>
                </tr>
                </tbody>
            </table>
        </div>)

}

export default AnsweredPoll;

AnsweredPoll.propTypes = {
    question: PropTypes.object.isRequired,
    users: PropTypes.object.isRequired,
    answeredOne: PropTypes.bool.isRequired,
}
