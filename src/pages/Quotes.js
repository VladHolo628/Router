import React from "react";

import QuoteList from "../components/quotes/QuoteList";

const DATA = [
  {
    id: "01",
    author: "Jordan Peterson",
    text: "You must sucrifice in order to succseed",
  },
  { id: "02", author: "Steve Jobs", text: "Think Different!" },
  {
    id: "03",
    author: "Marcus Aurelius",
    text: "Your mind is your biggest enemy",
  },
];

export const Quotes = () => {
  return <QuoteList quotes={DATA} />;
};
