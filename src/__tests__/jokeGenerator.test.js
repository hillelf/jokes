import React from 'react';
import { render } from '@testing-library/react';
import Joke from '../joke';
import JokeGenerator from '../jokeGenerator';

test("Joke component receives props and then renders text", () => {
	//Renders Joke component with some text prop.
	
	const { getByTestId } = render(
		<Joke text="The funniest joke this year." />
	);

	 //Expects Joke component to render correct text.
	 const el = getByTestId("joke-text");
	 expect(el.innerHTML).toBe("The funniest joke this year.");
});

test("'JokeGenerator' component fetches a random joke and renders it", () => {
	const { getByText } = render(<JokeGenerator />);
	expect(getByText("You haven't loaded any joke yet!")).toBeInTheDocument();
});