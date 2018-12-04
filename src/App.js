import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import ManagePage from "./ManagePage";
import PreviewPage from "./PreviewPage";

const AppRouter = () => (
  <Router>
    <div>
      <nav>
        <h1>
          <span><Link to="/ManagePage/">Manage</Link></span> <span><Link to="/PreviewPage/">Preview</Link></span>
        </h1>
      </nav>
      <Route path="/PreviewPage/" component={PreviewPage} />
      <Route path="/ManagePage/" component={ManagePage} />
    </div>
  </Router>
);

export default AppRouter;
