import React from 'react';
import { render } from '@testing-library/react';
import ReactTestUtils from 'react-dom/test-utils'; 
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
	const { getByText, queryByText } = render(<JokeGenerator />);
	expect(getByText("You haven't loaded any joke yet!")).toBeInTheDocument();

	ReactTestUtils.Simulate.click(getByText("Load a random joke"));

	expect(queryByText("You haven't loaded a joke yet!")).not.toBeInTheDocument();

	expect(queryByText("Loading...")).toBeInTheDocument();
});