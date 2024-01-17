import NewPollPage from "./NewPollPage";
import {renderWithProviders} from "../utils/test-utils";
import userEvent from "@testing-library/user-event";

describe('Adding new poll', () => {
    function createComponent() {
        return renderWithProviders(<NewPollPage/>, {
            preloadedState: {
                authedUser: 'tylermcginnis'
            }
        });
    }

    async function getSubmitButton(component) {
        return component.getByText('Submit');
    }

    it('should have disabled Submit-button', async () => {
        const component = createComponent();

        const submitButton = await getSubmitButton(component);
        expect(submitButton).toBeDisabled();
    });

    it('should have enabled Submit-button when both input options are filled', async () => {
        const component = createComponent();

        const inputOption1 = await component.getByLabelText('Option 1:');
        await userEvent.type(inputOption1, "Have a succeeding unit test");
        expect(inputOption1.value).toBe("Have a succeeding unit test");

        const inputOption2 = await component.getByLabelText('Option 2:');
        await userEvent.type(inputOption2, "Have a useful unit test");
        expect(inputOption2.value).toBe("Have a useful unit test");

        const submitButton = await getSubmitButton(component);
        expect(submitButton).toBeEnabled();
    });

    it('should have disabled Submit-button when only input option 1 is filled', async () => {
        const component = createComponent();

        const inputOption1 = await component.getByLabelText('Option 1:');
        await userEvent.type(inputOption1, "Have a succeeding unit test");
        expect(inputOption1.value).toBe("Have a succeeding unit test");

        const submitButton = await getSubmitButton(component);
        expect(submitButton).toBeDisabled();
    });

    it('should have disabled Submit-button when only input option 2 is filled', async () => {
        const component = createComponent();

        const inputOption2 = await component.getByLabelText('Option 2:');
        await userEvent.type(inputOption2, "Have a useful unit test");
        expect(inputOption2.value).toBe("Have a useful unit test");

        const submitButton = await getSubmitButton(component);
        expect(submitButton).toBeDisabled();
    });
});
