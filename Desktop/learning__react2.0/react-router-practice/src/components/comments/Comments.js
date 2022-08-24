import { useState, useEffect, useCallback } from "react";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import classes from "./Comments.module.css";
import NewCommentForm from "./NewCommentForm";
import useHttp from "../../hooks/use-http";
import { getAllComments } from "../../lib/api";
import LoadingSpinner from "../UI/LoadingSpinner";
import CommentList from "./CommentsList";
const Comments = () => {
  const params = useParams();
  const { quotedId } = params;
  const {
    sendRequest,
    status,
    data: loadedComments,
    error,
  } = useHttp(getAllComments);
  const [isAddingComment, setIsAddingComment] = useState(false);
  console.log("ol");
  const startAddCommentHandler = () => {
    setIsAddingComment(true);
  };
  const addedCommentHandler = useCallback(() => {
    // setIsAddingComment(false);
    sendRequest(quotedId);
  }, [sendRequest, quotedId]);
  useEffect(() => {
    sendRequest(quotedId);
  }, [quotedId, sendRequest]);
  let comments;

  if (status === "pending") {
    // return (
    comments = (
      <div className="centered">
        <LoadingSpinner />
      </div>
    );
    // );
  }
  if (status === "completed" && loadedComments && loadedComments.length > 0) {
    comments = <CommentList comments={loadedComments} />;
  }
  if (status === "completed" && !loadedComments) {
    comments = <p className="centered focused">No comments found</p>;
  }
  return (
    <section className={classes.comments}>
      <h2>User Comments</h2>
      {!isAddingComment && (
        <button className="btn" onClick={startAddCommentHandler}>
          Add a Comment
        </button>
      )}
      {isAddingComment && (
        <NewCommentForm
          quotedId={params.quotedId}
          onAddedComment={addedCommentHandler}
        />
      )}
      {comments}
    </section>
  );
};

export default Comments;
