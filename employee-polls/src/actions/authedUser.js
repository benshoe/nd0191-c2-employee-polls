export const SET_AUTHED_USER = "SET_AUTHED_USER";
export const LOGOUT_AUTHED_USER = "LOGOUT_AUTHED_USER";

function setAuthedUser(id) {
    return {
        type: SET_AUTHED_USER,
        id: id
    }
}

function logoutAuthedUser(id) {
    return {
        type: LOGOUT_AUTHED_USER,
        id: id
    }
}

export function handleSelectUser(user) {
    return (dispatch) => {
        dispatch(setAuthedUser(user));
    }
}

export function handleLogoutUser(user) {
    return (dispatch) => {
        dispatch(logoutAuthedUser(user));
    }
}
