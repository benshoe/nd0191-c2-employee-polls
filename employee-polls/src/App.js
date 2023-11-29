import './App.css';
import {useEffect, useState} from "react";
import {_getUsers} from "./_DATA";
import LoginPage from "./components/LoginPage";
import {connect} from "react-redux";
import {Route, Routes} from "react-router-dom";
import Home from "./components/Home";
import Nav from "./components/Nav";
import Logout from "./components/Logout";

function App(props) {

    const [users, setUsers] = useState([]);

    useEffect(() => {
        const getUsers = async () => {
            console.log('getUsers wordt aangeroepen')
            const resp = await _getUsers();
            let entries = Object.entries(resp);
            let from = Array.from(entries);
            console.log('----');
            console.log(from);
            console.log(`Keys: ${Object.keys(resp)}`);
            console.log(`Values: ${JSON.stringify(Object.values(resp))}`);
            console.log(`Entries: ${JSON.stringify(Object.entries(resp))}`);

            setUsers(resp);
        };

        getUsers();
    }, []);

    return (
        <div className="App">
            <Nav />
            <h1>Employee Polls</h1>
            {props.loading ? <LoginPage users={Object.keys(users)}/> :
                (
                    <Routes>
                        <Route path="/" exact element={<Home />}/>
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
