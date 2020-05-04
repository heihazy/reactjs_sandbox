import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./Header/Header";
import Home from "./Home/Home";
import About from "./About/About";
import Blog from "./Blog/Blog";
import Create from "./Create/Create";
import "bootstrap/dist/css/bootstrap.min.css";

const App = () => {
  return (
    <div>
      <Router>
        <Header />
        <main>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/about-me" component={About} />
            <Route path="/blog" component={Blog} />
            <Route path="/create-blog" component={Create} />
          </Switch>
        </main>
      </Router>
    </div>
  );
};

export default App;
