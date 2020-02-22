import React from "react";
import {render, wait} from "@testing-library/react";
import ReactTestUtils from "react-dom/test-utils";
import * as axios from "axios";
import MockAdapter from "axios-mock-adapter";

import Quote from "../quote";
import QuoteGenerator from "../quoteGenerator";

const mock = new MockAdapter(axios, {delayResponse: Math.random() * 500});

afterAll(() => mock.restore());

test("Quote component receives props and then renders poem", () => {
  //Renders Quote component with some text prop.

  const quote = {
    text: "You can observe a lot just by watching.",
    author: "Yogi Berra"
  };

  const {getByTestId} = render(<Quote quote={quote} />);

  //Expects Quote component to render correct text.
  const el = getByTestId("quote-text");
  expect(el.innerHTML).toBe(
    "You can observe a lot just by watching.<p>by Yogi Berra</p>"
  );
});

test("'QuoteGenerator' component fetches a random poem and renders it", async () => {
  const quoteResponse = [
    {
      text:
        "Genius is one percent inspiration and ninety-nine percent perspiration.",
      author: "Thomas Edison"
    },
    {
      text: "You can observe a lot just by watching.",
      author: "Yogi Berra"
    }
  ];

  mock.onGet().replyOnce(200, {quoteResponse});

  const {getByText, queryByText, getByTestId} = render(<QuoteGenerator />);

  expect(getByText("You haven't loaded any quotes yet!")).toBeInTheDocument();

  ReactTestUtils.Simulate.click(getByText("Load a random quote"));

  await wait(() => expect(queryByText("Loading...")).not.toBeInTheDocument());

  expect(getByText("You haven't loaded any quotes yet!")).toBeInTheDocument();
});
