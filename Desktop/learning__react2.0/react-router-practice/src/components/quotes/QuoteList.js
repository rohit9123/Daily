import { Fragment } from "react";
import {
  useHistory,
  useRouteMatch,
} from "react-router-dom/cjs/react-router-dom.min";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import { useLocation } from "react-router-dom/cjs/react-router-dom.min";

import QuoteItem from "./QuoteItem";
import classes from "./QuoteList.module.css";
const sortQuotes = (quotes, ascending) => {
  return quotes.sort((a, b) => {
    // console.log(a.id, b.id);
    if (ascending) {
      return a.id > b.id ? 1 : -1;
    } else {
      return b.id > a.id ? 1 : -1;
    }
  });
};
const QuoteList = (props) => {
  const history = useHistory();
  const location = useLocation();
  const match = useRouteMatch();
  const queryParams = new URLSearchParams(location.search);
  const isSortingAscending = queryParams.get("sort") === "asc";
  const sortedQuotes = sortQuotes(props.quotes, isSortingAscending);
  console.log(sortedQuotes);
  const changeSortHandler = () => {
    history.push({
      pathname: location.pathname,
      search: `?sort=${isSortingAscending ? "desc" : "asc"}`,
    });
  };
  return (
    <Fragment>
      <div className={classes.sorting}>
        <button onClick={changeSortHandler}>
          Sort{isSortingAscending ? " Descending" : " Ascending"}
        </button>
      </div>
      <ul className={classes.list}>
        {sortedQuotes.map((quote) => (
          <QuoteItem
            key={quote.id}
            id={quote.id}
            author={quote.author}
            text={quote.text}
          />
        ))}
      </ul>
    </Fragment>
  );
};

export default QuoteList;
