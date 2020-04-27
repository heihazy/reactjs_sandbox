import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
  useRouteMatch,
} from "react-router-dom";
import Post from "./Post";
const BlogPage = () => {
  let { path, url } = useRouteMatch();
  return (
    <div>
      <div className="blog-page">
        <div className="blog-post">
          <Link
            style={{ textDecoration: "none", color: "black" }}
            to={`${url}/post1`}
          >
            <Post />
          </Link>
        </div>
        <div className="blog-post">
          <Link to={`${url}/post2`}>
            <Post />
          </Link>
        </div>
        <div className="blog-post">
          <Link to={`${url}/post3`}>
            <Post />
          </Link>
        </div>
      </div>

      <Switch>
        <Route path={`${path}/:PostId`}>
          <Post />
        </Route>
      </Switch>
    </div>
  );
};

export default BlogPage;
