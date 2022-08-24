import QuoteList from "../components/quotes/QuoteList";
import useHttp from "../hooks/use-http";
import QuoteDetails from "./QuoteDetails";
import LoadingSpinner from "../components/UI/LoadingSpinner";
import { getAllQuotes } from "../lib/api";

import { useEffect } from "react";
export const data = [];
const AllQuotes = () => {
  const {
    sendRequest,
    status,
    data: loadedQuote,
    error,
  } = useHttp(getAllQuotes, true);
  useEffect(() => {
    sendRequest();
  }, [sendRequest]);
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
  if (status === "completed" && (!loadedQuote || !loadedQuote.length)) {
    return <p className="centered focused">No quotes found</p>;
  }
  return <QuoteList quotes={loadedQuote} />;
};
export default AllQuotes;
