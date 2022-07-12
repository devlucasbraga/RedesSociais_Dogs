import React, { useContext } from "react";
import { UserContext } from "../../UserContext";
import PhotoCommentsForm from "../PhotoCommentsForm";
import { ContainerComment } from "./styled";

const PhotoComments = (props) => {
  const [comments, setComments] = React.useState(() => props.comments);
  const commentsSections = React.useRef(null);
  const { login } = useContext(UserContext);

  React.useEffect(() => {
    commentsSections.current.scrollTop = commentsSections.current.scrollHeight;
  }, [comments]);

  return (
    <>
      <ContainerComment
        className={props.single ? "single" : ""}
        ref={commentsSections}
      >
        {comments.map((comment) => (
          <li key={comment.comment_ID}>
            <b>{comment.comment_author}: </b>
            <span>{comment.comment_content}</span>
          </li>
        ))}
      </ContainerComment>
      {login && <PhotoCommentsForm id={props.id} setComments={setComments} />}
    </>
  );
};

export default PhotoComments;
