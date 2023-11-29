import {connect} from "react-redux";
import {handleInitialData} from "../actions/shared";

const Home = (props) => {

    handleInitialData();

    return (
        <>
            {props.user}
        </>
    )
}

const mapStateToProps = ({authedUser}) => (
    {
        user: authedUser,
    })

export default connect(mapStateToProps)(Home)
