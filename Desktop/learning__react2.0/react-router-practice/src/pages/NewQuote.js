import QuoteForm from "../components/quotes/QuoteForm";
import { useHistory } from "react-router-dom";
import { addQuote } from "../lib/api";
import { useEffect } from "react";
import useHttp from "../hooks/use-http";
const NewQuote = () => {
  const { sendRequest, status } = useHttp(addQuote);
  const history = useHistory();
  useEffect(() => {
    console.log(status);
    if (status === "completed") {
      history.push("/quotes");
    }
  }, [status, history]);
  const addQuoteHandler = (props) => {
    sendRequest(props);
    console.log(props);
    // history.push("/quotes");
  };
  return (
    <QuoteForm isLoading={status === "pending"} onAddQuote={addQuoteHandler} />
  );
};
export default NewQuote;
