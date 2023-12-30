import {connect} from "react-redux";
import Polls from "./Polls";

const Home = () => {

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
