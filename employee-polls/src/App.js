import './App.css';
import {useEffect, useState} from "react";
import {_getUsers} from "./_DATA";
import LoginPage from "./components/LoginPage";
import {connect} from "react-redux";
import {Route, Routes} from "react-router-dom";
import Home from "./components/Home";
import Nav from "./components/Nav";
import Logout from "./components/Logout";
import {handleInitialData} from "./actions/shared";
import PropTypes from "prop-types";
import QuestionPage from "./components/QuestionPage";
import Leaderboard from "./components/Leaderboard";
import NewPollPage from "./components/NewPollPage";

function App(props) {

    const [users, setUsers] = useState([]);

    useEffect(() => {
        const getUsers = async () => {
            props.dispatch(handleInitialData())
            const resp = await _getUsers();
            setUsers(resp);
        };

        getUsers().then(() => console.log("Users loaded")).catch((err) => console.error(err));
    }, [props]);

    return (
        <div className="App">
            <Nav />
            {props.loading ? <LoginPage users={Object.keys(users)}/> :
                (
                    <Routes>
                        <Route path="/" exact element={<Home />}/>
                        <Route path="/leaderboard" exact element={<Leaderboard /> }/>
                        <Route path="/question/:id" element={<QuestionPage /> }/>
                        <Route path="/add" element={<NewPollPage /> }/>
                        <Route path="/logout" exact element={<Logout /> }/>
                    </Routes>
                )}
        </div>
    );
}

const mapStateToProps = ({authedUser}) => (
    {
        loading: authedUser === null,
    })

export default connect(mapStateToProps)(App);

App.propTypes = {
    loading: PropTypes.bool.isRequired,
    dispatch: PropTypes.func.isRequired
}
