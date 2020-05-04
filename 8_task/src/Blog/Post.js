import React from "react";
import "./Post.css";
import { Link, useParams } from "react-router-dom";
import posts from "../postdata";
import Alert from "react-bootstrap/Alert";

const Post = () => {
  let { postId } = useParams();
  let post = posts.find((p) => p.title === postId);
  return (
    <div className="post-card">
      <img className="post" src={post.source} alt={post.title} />
      <div className="blog-text">
        <h2>{post.title}</h2>
        <h3>{post.author}</h3>
        <p>{post.content}</p>
        <Alert>
          <Alert.Link>
            <Link to="/blog">Back to Blog</Link>
          </Alert.Link>
        </Alert>
      </div>
    </div>
  );
};

export default Post;
