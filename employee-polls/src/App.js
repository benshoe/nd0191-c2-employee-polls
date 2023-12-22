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
import Dashboard from "./components/Dashboard";

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
            <h1>Employee Polls</h1>
            {props.loading ? <LoginPage users={Object.keys(users)}/> :
                (
                    <Routes>
                        <Route path="/" exact element={<Home />}/>
                        <Route path="/dashboard" exact element={<Dashboard /> }/>
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
