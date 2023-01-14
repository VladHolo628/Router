import { Route, Switch, Redirect } from "react-router-dom";
import { Layout } from "./components/layout/Layout";
import { AddQuote } from "./pages/AddQuote";
import { NotFound } from "./pages/NotFound";
import { QuoteDetails } from "./pages/QuoteDetails";
import { Quotes } from "./pages/Quotes";

function App() {
  return (
    <Layout>
      <Switch>
        <Route path={"/"} exact>
          <Redirect to={"/quotes"} />
        </Route>
        <Route path={"/quotes"} exact>
          <Quotes />
        </Route>
        <Route path={"/quotes/:quoteId"}>
          <QuoteDetails />
        </Route>
        <Route path={"/add-quote"}>
          <AddQuote />
        </Route>
        <Route to={"*"}>
          <NotFound />
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;
