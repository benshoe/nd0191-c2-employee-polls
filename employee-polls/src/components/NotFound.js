import PropTypes from "prop-types";

const NotFound = ({props}) => {
    if(props) {
        return <h1>Question with id: {props} not found</h1>
    }
    return <h1>404: Page not found</h1>
}

export default NotFound;

NotFound.propTypes ={
    props: PropTypes.object,
}
