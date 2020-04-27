import React from "react";
import "./Post.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
  useRouteMatch,
} from "react-router-dom";
const Post = (props) => {
  let { PostId } = useParams();
  return (
    <div onClick={props.click} className="post-card">
      <img className="post" src={props.source} alt="post" />
      <div className="blog-text">
        <h2>{props.title}</h2>
        <h3>{props.author}</h3>
        <p>{props.content}</p>
      </div>
    </div>
  );
};

export default Post;
