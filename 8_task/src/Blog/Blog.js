import React, { Component } from "react";
import Post from "./Post";
import posts from "../postdata";
import "./Blog.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
  useRouteMatch,
} from "react-router-dom";
import Button from "../Button/Button";

class Blog extends Component {
  state = {
    posts: posts,
  };
  render() {
    const postList = this.state.posts.map((post, index) => {
      return (
        <Post
          key={post.id}
          source={post.source}
          title={post.title}
          author={post.author}
          content={post.content}
        />
      );
    });
    return <div className="posts">{postList}</div>;
  }
}

export default Blog;
