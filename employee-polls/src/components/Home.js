import {connect} from "react-redux";
import {handleInitialData} from "../actions/shared";
import PropTypes from "prop-types";

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

Home.propTypes = {
    user: PropTypes.string.isRequired,
}
