import {connect} from "react-redux";

const Home = (props) => {

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
