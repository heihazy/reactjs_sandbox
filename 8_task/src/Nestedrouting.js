import React from "react";
import {
  BrowserRouter as Router,
  Swich,
  Route,
  Link,
  useParams,
  useRouteMatch,
  Switch,
} from "react-router-dom";

const Nav = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/courses">Courses</Link>
        </li>
      </ul>
    </nav>
  );
};

const Home = () => {
  return <h1>Welcome to Mimi's page</h1>;
};

const About = () => {
  return <h1>Hi, I'm Mimi</h1>;
};

const Courses = () => {
  let { path, url } = useRouteMatch();

  return (
    <div>
      <h1>Please choose your courses </h1>
      <ul>
        <li>
          <Link to={`${url}/html&css`}>HTML and CSS</Link>
        </li>
        <li>
          <Link to={`${url}/UI&UX`}>UI and UX Design</Link>
        </li>
        <li>
          <Link to={`${url}/react`}>React</Link>
        </li>
        <li>
          <Link to={`${url}/nodejs`}>Nodejs</Link>
        </li>
      </ul>
      <Switch>
        {/* <Route path={`${path}/html&css`} component={About} /> */}
        <Route path={`${path}/:CourseId`}>
          <Topic />
        </Route>
      </Switch>
    </div>
  );
};

const Topic = () => {
  let { CourseId } = useParams();
  return <h1>This is topic {CourseId}</h1>;
};
const Nestedrouting = () => {
  return (
    <Router>
      <Nav />
      <main>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/courses" component={Courses} />
        </Switch>
      </main>
    </Router>
  );
};

export default Nestedrouting;
