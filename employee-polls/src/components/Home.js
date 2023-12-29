import {connect} from "react-redux";
import {handleInitialData} from "../actions/shared";
import PropTypes from "prop-types";
import Polls from "./Polls";

const Home = () => {

    handleInitialData();

    return (
        <div>
            <div className="polls-list">Unanswered polls</div>
                <Polls answered={false} />
            <div className="polls-list">Answered polls</div>
                <Polls answered={true} />
        </div>
    )
}

export default connect()(Home)
