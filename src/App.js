import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import ManagePage from "./ManagePage";
import PreviewPage from "./PreviewPage";

const Index = () => <h2>Home</h2>;

const AppRouter = () => (
  <Router>
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/PreviewPage/">Preview</Link>
          </li>
          <li>
            <Link to="/ManagePage/">Manage</Link>
          </li>
        </ul>
      </nav>

      <Route path="/" exact component={Index} />
      <Route path="/PreviewPage/" component={PreviewPage} />
      <Route path="/ManagePage/" component={ManagePage} />
    </div>
  </Router>
);

export default AppRouter;
