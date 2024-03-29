import {connect} from "react-redux";
import {useState} from "react";
import {handleAddQuestion} from "../actions/questions";
import {useNavigate} from "react-router-dom";
import PropTypes from "prop-types";

const NewPollPage = ({dispatch}) => {

    const [optionOne, setOptionOne] = useState('');
    const [optionTwo, setOptionTwo] = useState('');

    const navigate = useNavigate();

    const handleChangeOne = (e) => {
        setOptionOne(e.target.value);
    };

    const handleChangeTwo = (e) => {
        setOptionTwo(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        dispatch(handleAddQuestion(optionOne, optionTwo));

        navigate("/");
    };

    return (
        <div className="new-poll-page">
            <h1>Create a new poll</h1>
            <form className="poll-radio" onSubmit={handleSubmit}>
                <div>Would you rather:</div>
                <label className="option-field">Option 1: <textarea className="textarea" autoFocus={true}
                                           placeholder="Enter option 1"
                                           value={optionOne}
                                           onChange={handleChangeOne}
                                           maxLength={280}/></label>
                <label className="option-field">Option 2: <textarea className="textarea"
                                           placeholder="Enter option 2"
                                           value={optionTwo}
                                           onChange={handleChangeTwo}
                                           maxLength={280}/></label>
                <button className="btn" type="submit" disabled={optionOne === "" || optionTwo === ""}>Submit</button>
            </form>
        </div>
    )
}

export default connect()(NewPollPage);

NewPollPage.propTypes = {
    dispatch: PropTypes.func.isRequired
}
