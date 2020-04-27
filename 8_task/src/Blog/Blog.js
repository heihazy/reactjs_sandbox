import React, { Component } from "react";
import Post from "./Post";
import "./Blog.css";
const posts = [
  {
    id: 1,
    source: "https://source.unsplash.com/aH9Uskj8XTU/",
    title: "Post 1",
    author: "Shiba Inu",
    content:
      "Elit sunt cillum velit minim incididunt consequat excepteur. Nisi minim dolore in aliquip reprehenderit ea voluptate ullamco pariatur sint irure voluptate duis ullam",
  },
  {
    id: 2,
    source: "https://source.unsplash.com/NeRrOJJs1J8/",
    title: "Post 2",
    author: "Corgi",
    content:
      "Commodo nulla nulla do eu ex fugiat officia sint laborum pariatur anim. In culpa cillum commodo velit pariatur dolore ipsum elit minim.",
  },
  {
    id: 3,
    source: "https://source.unsplash.com/ujUiOCHkqM0/",
    title: "Post 3",
    author: "Pomeranian",
    content:
      "Veniam sunt cupidatat ut excepteur nisi fugiat nostrud. Exercitation ut non cillum occaecat consectetur ea. Exercitation ut non cillum occaecat consectetur ea",
  },
];

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
