import React from "react";
import { useParams, Route } from "react-router-dom";

import Comments from "../components/comments/Comments";
import HighlightedQuote from "../components/quotes/HighlightedQuote";

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

export const QuoteDetails = () => {
  const params = useParams();

  const quote = DATA.find((item) => item.id === params.quoteId);

  return (
    <>
      <HighlightedQuote author={quote.author} text={quote.text} />
      <Route path={`/quotes/${params.quoteId}/comments`}>
        <Comments />
      </Route>
    </>
  );
};
