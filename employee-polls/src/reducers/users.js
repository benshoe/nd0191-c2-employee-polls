import {RECEIVE_USERS} from "../actions/users";
import {ANSWER_QUESTION} from "../actions/questions";

export default function users(state = {}, action) {
    if(action.type === RECEIVE_USERS) {
        return {
            ...state,
            ...action.users,
        }
    }
    if(action.type === ANSWER_QUESTION) {
        return {
            ...state,
            [action.authedUser]: {
                ...state[action.authedUser],
                answers: {
                    ...state[action.authedUser].answers,
                    [action.id]: action.answer
                }
            }
        }
    }
    else {
        return state;
    }
}
