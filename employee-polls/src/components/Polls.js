import {connect} from "react-redux";
import Poll from "./Poll";

const Polls = (props) => {

    return <div>
        <h3 className="polls">Polls</h3>
        <ul>
            {
                props.questionIds.map((id) => (
                    <li key={id}>
                        <Poll id={id} />
                    </li>
                ))
            }
        </ul>
    </div>
}

const mapStateToProps = ({questions}) => ({
    questionIds: Object.keys(questions).sort(
        (a, b) => questions[b].timestamp - questions[a].timestamp
    )
});

export default connect(mapStateToProps)(Polls);
