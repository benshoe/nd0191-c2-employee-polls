import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import {handleLogoutUser, handleSelectUser, LOGOUT_AUTHED_USER, SET_AUTHED_USER} from "./authedUser";

const middlewares = [thunk];
const mockStore = configureStore(middlewares);
const store = mockStore();

describe('Redux Async Actions', () => {
    beforeEach(() => {
        store.clearActions();
    });

    it('should dispatch setAuthedUser action correctly', async () => {
        // Use Jest's timer mocks to control time-based functions
        jest.useFakeTimers();

        // Dispatch the async action
        store.dispatch(handleSelectUser('applepie'));

        // Advance timers to the next "tick" to simulate the passage of time
        jest.advanceTimersByTime(1000);

        // Wait for any pending promises to resolve
        await Promise.resolve();

        // Get the dispatched actions
        const actions = store.getActions();

        // Expect the correct action to be dispatched
        const expectedAction = { id: 'applepie', type: SET_AUTHED_USER };
        expect(actions).toEqual([expectedAction]);

        // Restore the original timers
        jest.useRealTimers();
    });

    it('should dispatch logoutAuthedUser action correctly', async () => {
        // Use Jest's timer mocks to control time-based functions
        jest.useFakeTimers();

        // Dispatch the async action
        store.dispatch(handleLogoutUser('cherrycake'));

        // Advance timers to the next "tick" to simulate the passage of time
        jest.advanceTimersByTime(1000);

        // Wait for any pending promises to resolve
        await Promise.resolve();

        // Get the dispatched actions
        const actions = store.getActions();

        // Expect the correct action to be dispatched
        const expectedAction = { id: 'cherrycake', type: LOGOUT_AUTHED_USER };
        expect(actions).toEqual([expectedAction]);

        // Restore the original timers
        jest.useRealTimers();
    });
});
