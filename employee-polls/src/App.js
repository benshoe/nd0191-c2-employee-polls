import './App.css';
import {useEffect, useState} from "react";
import {_getUsers} from "./_DATA";
import LoginPage from "./components/LoginPage";
import {connect} from "react-redux";

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

    const myStyle = {
        color: "blue",
        listStyleType: "none"
    }

    return (
        <div className="App">
            <h1>Employee Polls</h1>
            {props.loading ? <LoginPage users={Object.keys(users)} /> :
                (
            <ol style={myStyle}>
                { Object.keys(users).map((key) =>
                    <li style={{marginBottom: "50px"}} key={users[key].id}>
                        <img width={150} src={users[key].avatarURL} alt={users[key].avatarURL} />
                        <div>{users[key].name}</div>
                    </li>)
                }
            </ol>)}
        </div>
    );
}

const mapStateToProps = ({authedUser}) => (
    {
        loading: authedUser === null,
    })

export default connect(mapStateToProps)(App);
