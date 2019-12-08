import { render } from 'react-testing-library';
import "dom-testing-library/extend-expect";

test("Joke component receives props and then renders text", () => {
	//Renders Joke component with some text prop.
	const { getByTestId } = render(
		<Joke text="The funniest joke this year." />
	);
	 //Expects Joke component to render correct text.
	 expect((getByTestId("joke-text")).toHaveTextContent(
		 "The funniest joke this year."
	 ));
});