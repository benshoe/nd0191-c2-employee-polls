import renderer from "react-test-renderer";
import NotFound from "./NotFound";

describe('Test NotFound', () => {
    it('renders correctly', () => {
        const tree = renderer
            .create(<NotFound props={"1234"} />)
            .toJSON();

            expect(tree).toMatchSnapshot();
    });
});
