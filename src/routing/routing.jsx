import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import MainLayout from "../layouts/mainLayout/mainLayout";

const HomePage = lazy(() => import("../pages/homePage/homePage"));

const Routing = () => (
  <Router>
    <MainLayout>
      <Suspense fallback={"loading ..."}>
        <Switch>
          <Route exact path="/" component={HomePage} />
        </Switch>
      </Suspense>
    </MainLayout>
  </Router>
);

export default Routing;
