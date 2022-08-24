import { useRef, useEffect } from "react";
import useHttp from "../../hooks/use-http";
import { addComment } from "../../lib/api";
import classes from "./NewCommentForm.module.css";
// import { useParams } from 'react-router-dom/cjs/react-router-dom.min';

const NewCommentForm = (props) => {
  const commentTextRef = useRef();
  const { sendRequest, status } = useHttp(addComment);
  const { onAddedComment } = props;
  // const quote=useParams().quotesId;
  const submitFormHandler = (event) => {
    event.preventDefault();

    // optional: Could validate here
    sendRequest({
      commentData: { text: commentTextRef.current.value },
      quotedId: props.quotedId,
    });
    // send comment to server
  };
  useEffect(() => {
    if (status === "completed") {
      onAddedComment();
    }
  }, [status, onAddedComment]);

  return (
    <form className={classes.form} onSubmit={submitFormHandler}>
      <div className={classes.control} onSubmit={submitFormHandler}>
        <label htmlFor="comment">Your Comment</label>
        <textarea id="comment" rows="5" ref={commentTextRef}></textarea>
      </div>
      <div className={classes.actions}>
        <button className="btn">Add Comment</button>
      </div>
    </form>
  );
};

export default NewCommentForm;
