import NewPollPage from "./NewPollPage";
import {renderWithProviders} from "../utils/test-utils";
import userEvent from "@testing-library/user-event";
import {fireEvent} from "@testing-library/react";

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

    const option1Value = 'Have a succeeding unit test';
    const option2Value = "Have a useful unit test";

    it('should have enabled Submit-button when both input options are filled', async () => {
        const component = createComponent();

        const inputOption1 = await component.getByLabelText('Option 1:');
        await userEvent.type(inputOption1, option1Value);
        expect(inputOption1.value).toBe(option1Value);

        const inputOption2 = await component.getByLabelText('Option 2:');
        await userEvent.type(inputOption2, option2Value);
        expect(inputOption2.value).toBe(option2Value);

        const submitButton = await getSubmitButton(component);
        expect(submitButton).toBeEnabled();
    });

    it('should have disabled Submit-button when only input option 1 is filled', async () => {
        const component = createComponent();

        const inputOption1 = await component.getByLabelText('Option 1:');
        fireEvent.change(inputOption1, { target: { value: option1Value } });
        expect(inputOption1.value).toBe(option1Value);

        const submitButton = await getSubmitButton(component);
        expect(submitButton).toBeDisabled();
    });

    it('should have disabled Submit-button when only input option 2 is filled', async () => {
        const component = createComponent();

        const inputOption2 = await component.getByLabelText('Option 2:');
        fireEvent.change(inputOption2, { target: { value: option2Value } });
        expect(inputOption2.value).toBe(option2Value);

        const submitButton = await getSubmitButton(component);
        expect(submitButton).toBeDisabled();
    });
});
