import React from "react";
import "./Post.css";

const Post = (props) => {
  return (
    <div className="post-card">
      <img src={props.source} />
      <h2>{props.title}</h2>
      <h3>{props.author}</h3>
      <p>{props.content}</p>
    </div>
  );
};

export default Post;
