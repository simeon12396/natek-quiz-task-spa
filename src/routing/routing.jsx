import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import CustomLoading from "../components/common/loadingSpinner/customLoading";
import MainLayout from "../layouts/mainLayout/mainLayout";

const HomePage = lazy(() => import("../pages/homePage/homePage"));
const QuizPage = lazy(() => import('../pages/quizPage/quizPage'));

const Routing = () => (
  <Router>
    <MainLayout>
      <Suspense fallback={<CustomLoading loadingType="circular" />}>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/quiz/:quizType" component={QuizPage} />
        </Switch>
      </Suspense>
    </MainLayout>
  </Router>
);

export default Routing;
