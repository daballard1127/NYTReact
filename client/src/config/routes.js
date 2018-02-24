import React from "react";
import { Route, BrowserRouter } from "react-router-dom";

import Articles from "../components/common/Articles";

const routes = (
  <BrowserRouter>
    <Route path="/" component={Articles}>
    </Route>
  </BrowserRouter>
);

export default routes;