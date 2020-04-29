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
import Button from "../Button/Button";
import posts from "../postdata";
import Blog from "./Blog";
const findPost = () => {
  posts.find(posts);
};
const Post = (props) => {
  return (
    <div className="post-card">
      <img className="post" src={props.source} alt="post" />
      <div className="blog-text">
        <h2>{props.title}</h2>
        <h3>{props.author}</h3>
        <p>{props.content}</p>
      </div>
      <Button click={findPost} />
    </div>
  );
};

export default Post;
