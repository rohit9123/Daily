import {
  useParams,
  Route,
  useHistory,
  Link,
  useRouteMatch,
} from "react-router-dom";
import Comments from "../components/comments/Comments";
import { useEffect } from "react";
import { data } from "./AllQuotes";
import HighlightedQuotes from "../components/quotes/HighlightedQuote";
import useHttp from "../hooks/use-http";
import { getSingleQuote } from "../lib/api";
import LoadingSpinner from "../components/UI/LoadingSpinner";
const QuoteDetails = () => {
  const match = useRouteMatch();
  console.log(match);
  const history = useHistory();
  const params = useParams();
  const query = params.quotesId;

  // const [seeComments, setSeeComments] = useState(false);
  const {
    sendRequest,
    status,
    data: loadedQuote,
    error,
  } = useHttp(getSingleQuote, true);
  useEffect(() => {
    sendRequest(query);
  }, [sendRequest, query]);
  // const handleClick = () => {
  //   history.push(`/quotes/${quote.id}/comments`);
  //   setSeeComments(true);
  // };
  if (status === "pending") {
    return (
      <div className="centered">
        <LoadingSpinner />
      </div>
    );
  }
  if (status === "error") {
    return <p className="centered focused">{error}</p>;
  }
  if (!loadedQuote) {
    return <p className="centered focused">No quotes found</p>;
  }
  return (
    <>
      {/* {!seeComments && <button onClick={handleClick}>See comments</button>} */}
      <HighlightedQuotes text={loadedQuote.text} author={loadedQuote.author} />
      <Route path={`${match.path}`} exact>
        <div className="centered">
          <Link className="btn" to={`${match.url}/comments`}>
            Load comments
          </Link>
        </div>
      </Route>

      <Route path={`${match.url}/comments`}>
        <Comments />
      </Route>
    </>
  );
};
export default QuoteDetails;
