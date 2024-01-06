import './App.css';
import {Fragment, useEffect} from "react";
import LoginPage from "./LoginPage";
import {connect} from "react-redux";
import {Route, Routes} from "react-router-dom";
import Home from "./Home";
import Nav from "./Nav";
import Logout from "./Logout";
import {handleInitialData} from "../actions/shared";
import PropTypes from "prop-types";
import LoadingBarContainer from "react-redux-loading-bar";
import QuestionPage from "./QuestionPage";
import Leaderboard from "./Leaderboard";
import NewPollPage from "./NewPollPage";
import NotFound from "./NotFound";

const App = (props) => {

    useEffect(() => {
        props.dispatch(handleInitialData());
    }, [props]);

    return (
        <Fragment>
            <LoadingBarContainer />
            <div className="App">
                <Nav/>
                {props.loading ? <LoginPage /> : (
                <Routes>
                    <Route path="/" exact element={<Home/>}/>
                    <Route path="/leaderboard" exact element={<Leaderboard/>}/>
                    <Route path="/question/:id" element={<QuestionPage/>}/>
                    <Route path="/add" element={<NewPollPage/>}/>
                    <Route path="/logout" exact element={<Logout/>}/>
                    <Route path="*" element={<NotFound />}/>
                </Routes>)}
            </div>
        </Fragment>
    );
};

const mapStateToProps = ({authedUser}) => (
    {
        loading: authedUser === null,
    });

export default connect(mapStateToProps)(App);

App.propTypes = {
    loading: PropTypes.bool.isRequired,
    dispatch: PropTypes.func.isRequired
}
