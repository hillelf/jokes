import React from "react";
import {render, wait} from "@testing-library/react";
import ReactTestUtils from "react-dom/test-utils";
import * as axios from "axios";
import MockAdapter from "axios-mock-adapter";

import Joke from "../joke";
import JokeGenerator from "../jokeGenerator";

const mock = new MockAdapter(axios, {delayResponse: Math.random() * 500});

afterAll(() => mock.restore());

test("Joke component receives props and then renders text", () => {
  //Renders Joke component with some text prop.

  const {getByTestId} = render(<Joke text="The funniest joke this year." />);

  //Expects Joke component to render correct text.
  const el = getByTestId("joke-text");
  expect(el.innerHTML).toBe("The funniest joke this year.");
});

test("'JokeGenerator' component fetches a random joke and renders it", async () => {
  mock.onGet().replyOnce(200, {
    value: {
      joke: "Really funny joke!"
    }
  });

  const {getByText, queryByText} = render(<JokeGenerator />);
  expect(getByText("You haven't loaded any joke yet!")).toBeInTheDocument();

  ReactTestUtils.Simulate.click(getByText("Load a random joke"));

  expect(queryByText("You haven't loaded a joke yet!")).not.toBeInTheDocument();

  expect(queryByText("Loading...")).toBeInTheDocument();

  await wait(() => expect(queryByText("Loading...")).not.toBeInTheDocument());

  expect(getByText("You haven't loaded any joke yet!")).toBeInTheDocument();
});
