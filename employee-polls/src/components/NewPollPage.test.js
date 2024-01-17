import NewPollPage from "./NewPollPage";
import thunk from "redux-thunk";
import configureStore from "redux-mock-store";
import {renderWithProviders} from "../utils/test-utils";
import logger from "../middleware/logger";

const middlewares = [thunk, logger];
const mockStore = configureStore(middlewares);
const store = mockStore();
describe('Adding new poll', () => {
    it('should have disabled Submit-button', async () => {
        var component = renderWithProviders(<NewPollPage />, {
            preloadedState: {
                authedUser: 'tylermcginnis'
            }
        });
        const submitButton = await component.getByText('Submit');
        expect(submitButton).toBeDisabled();
    });
});
