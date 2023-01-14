import React from "react";
import { useHistory } from "react-router-dom";

import QuoteForm from "../components/quotes/QuoteForm";

export const AddQuote = () => {
  const history = useHistory();
  const formHandler = (quoteData) => {
    console.log(quoteData);
    history.replace("/quotes");
  };

  return <QuoteForm onAddQuote={formHandler} />;
};
