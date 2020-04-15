import "./App.css";
import React, { Component } from "react";
import Post from "./Post/Post";

const posts = [
  {
    id: 1,
    source: "https://source.unsplash.com/?dog",
    title: "Velit laborum proident ullamco enim ea id nisi nisi.",
    author: "Phuong Laitinen",
    content:
      "Elit sunt cillum velit minim incididunt consequat excepteur. Nisi minim dolore in aliquip reprehenderit ea voluptate ullamco pariatur sint irure voluptate duis ullam",
  },
  {
    id: 2,
    source: "https://source.unsplash.com/?decoration",
    title: "Sit non dolore nisi reprehenderit",
    author: "Ilari Laitinen",
    content:
      "Incididunt consequat pariatur adipisicing ex consectetur ullamco qui nisi. Commodo nulla nulla do eu ex fugiat officia sint laborum pariatur anim. In culpa cillum commodo velit pariatur dolore ipsum elit minim.",
  },
  {
    id: 3,
    source: "https://source.unsplash.com/?study",
    title: "Do cupidatat labore ut eu sit duis.",
    author: "Possulainen",
    content:
      "Veniam sunt cupidatat ut excepteur nisi fugiat nostrud. Exercitation ut non cillum occaecat consectetur ea. Exercitation ut non cillum occaecat consectetur ea",
  },
];

class App extends Component {
  state = {
    posts: posts,
  };
  render() {
    const postList = this.state.posts.map((post) => {
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

export default App;
