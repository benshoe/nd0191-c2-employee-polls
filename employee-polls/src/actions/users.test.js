import thunk from "redux-thunk";
import configureStore from "redux-mock-store";
import {RECEIVE_USERS, receiveUsers} from "./users";

const middlewares = [thunk];
const mockStore = configureStore(middlewares);
const store = mockStore();

describe('Redux Async Actions', () => {
    beforeEach(() => {
        store.clearActions();
    });

    it('should dispatch receiveUsers action correctly', async () => {
        // Use Jest's timer mocks to control time-based functions
        jest.useFakeTimers();

        // Dispatch the async action
        const users = {
            sarahedo: {
                id: 'sarahedo',
                password:'password123',
                name: 'Sarah Edo',
                avatarURL: '/assets/avatars/blond-woman.png',
                answers: {
                    "8xf0y6ziyjabvozdd253nd": 'optionOne',
                    "6ni6ok3ym7mf1p33lnez": 'optionOne',
                    "am8ehyc8byjqgar0jgpub9": 'optionTwo',
                    "loxhs1bqm25b708cmbf3g": 'optionTwo'
                },
                questions: ['8xf0y6ziyjabvozdd253nd', 'am8ehyc8byjqgar0jgpub9']
            },
            tylermcginnis: {
                id: 'tylermcginnis',
                password:'abc321',
                name: 'Tyler McGinnis',
                avatarURL: '/assets/avatars/red-woman.png',
                answers: {
                    "vthrdm985a262al8qx3do": 'optionOne',
                    "xj352vofupe1dqz9emx13r": 'optionTwo',
                },
                questions: ['loxhs1bqm25b708cmbf3g', 'vthrdm985a262al8qx3do'],
            }
        };
        store.dispatch(receiveUsers(users));

        // Advance timers to the next "tick" to simulate the passage of time
        jest.advanceTimersByTime(1000);

        // Wait for any pending promises to resolve
        await Promise.resolve();

        // Get the dispatched actions
        const actions = store.getActions();

        // Expect the correct action to be dispatched
        const expectedAction = {users: users, type: RECEIVE_USERS};
        expect(actions).toEqual([expectedAction]);

        // Restore the original timers
        jest.useRealTimers();
    });
});
