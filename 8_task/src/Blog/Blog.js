import React from "react";
import Post from "./Post";
import posts from "../postdata";
import "./Blog.css";
import { Switch, Route, Link, useRouteMatch } from "react-router-dom";

const Blog = () => {
  let match = useRouteMatch();
  const post = posts;
  const postList = post.map((post) => {
    return (
      <div className="cards" key={post.id}>
        <img src={post.source} alt={post.title} />
        <div>
          <h2>{post.title}</h2>
          <h3>{post.author}</h3>
          <p>{post.content}</p>
          <Link to={`${match.url}/${post.title}`}>Read More</Link>
        </div>
      </div>
    );
  });
  return (
    <div className="posts">
      <Switch>
        <Route path="/blog/:postId">
          <Post />
        </Route>
        <Route path={match.path}>{postList}</Route>
      </Switch>
    </div>
  );
};
export default Blog;
