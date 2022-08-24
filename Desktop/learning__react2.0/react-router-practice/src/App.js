import { Route, Switch, Redirect } from "react-router-dom";
import QuoteDetails from "./pages/QuoteDetails";
import NewQuote from "./pages/NewQuote";
import Quotes from "./pages/AllQuotes";
import Layout from "./components/layout/Layout";
import NotFound from "./pages/NotFound";
function App() {
  return (
    <Layout>
      {/* <QouteDetails /> */}
      <Switch>
        <Route path="/" exact>
          <Redirect to="/quotes" />
        </Route>
        <Route path="/quotes" exact>
          <Quotes />
        </Route>
        <Route path="/quotes/:quotesId">
          <QuoteDetails />
        </Route>
        <Route path="/new-quotes" exact>
          <NewQuote />
        </Route>
        <Route path="*">
          <NotFound />
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;
