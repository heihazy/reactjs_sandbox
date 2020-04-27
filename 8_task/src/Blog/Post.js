import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
  useRouteMatch,
} from "react-router-dom";
const Post = () => {
  let { PostId } = useParams();
  return (
    <div>
      <h1>{PostId}</h1>
      <p>
        Aliqua dolor aute cillum exercitation ea do do esse exercitation
        consequat laboris non deserunt. Nisi dolore in amet laboris anim eiusmod
        aliqua exercitation id. Labore fugiat reprehenderit ullamco excepteur
        ullamco in ullamco est eu elit proident esse excepteur.
      </p>
    </div>
  );
};

export default Post;
