import React from 'react';
import { render, wait } from '@testing-library/react';
import ReactTestUtils from 'react-dom/test-utils';
import * as axios from "axios";
import MockAxios from "axios-mock-adapter";

// import Poem from '../poem';
// import PoemGenerator from '../poemGenerator';

const mock = new MockAxios(axios, { delayResponse: Math.random() * 500});

afterAll( () => mock.restore());

test("Poem component receives props and then renders text", () => {
  //Renders Joke component with some text prop.
  
  const { getByTestId } = render(
    <Poem text="The coolest poem ever." />
  );

   //Expects Poem component to render correct text.
   const el = getByTestId("poem-text");
   expect(el.innerHTML).toBe("The coolest poem ever.");
});

// test("'JokeGenerator' component fetches a random joke and renders it", async () => {
//   mock.onGet().replyOnce(200, {
//     value: {
//       joke: "Really funny joke!"
//     }
//   });

//   const { getByText, queryByText, queryByTestId } = render(<JokeGenerator />);
//   expect(getByText("You haven't loaded any joke yet!")).toBeInTheDocument();

//   ReactTestUtils.Simulate.click(getByText("Load a random joke"));

//   expect(queryByText("You haven't loaded a joke yet!")).not.toBeInTheDocument();

//   expect(queryByText("Loading...")).toBeInTheDocument();

//   await wait(() => expect(queryByText("Loading...")).not.toBeInTheDocument()); 
  

//   expect(queryByTestId("joke-text")).toBeInTheDocument();
  
// });