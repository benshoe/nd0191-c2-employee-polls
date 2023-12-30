import {connect} from "react-redux";
import {useState} from "react";
import {handleAddQuestion} from "../actions/questions";
import {useNavigate} from "react-router-dom";

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
        <div>
            <h1>Create a new poll</h1>
            <form className="poll-radio" onSubmit={handleSubmit}>
                <div>Would you rather:</div>
                <label>Option 1: <textarea className="textarea"
                                           placeholder="Enter option 1"
                                           value={optionOne}
                                           onChange={handleChangeOne}
                                           maxLength={280}/></label>
                <label>Option 2: <textarea className="textarea"
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
