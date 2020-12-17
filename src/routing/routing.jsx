import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import CustomLoading from "../components/common/loadingSpinner/customLoading";
import MainLayout from "../layouts/mainLayout/mainLayout";

const HomePage = lazy(() => import("../pages/homePage/homePage"));
const QuizCSPage = lazy(() => import('../pages/quizComputerSciencePage/quizComputerSciencePage'));
const QuizSportsPage = lazy(() => import('../pages/quizSportsPage/quizSportsPage'));

const Routing = () => (
  <Router>
    <MainLayout>
      <Suspense fallback={<CustomLoading loadingType="circular" />}>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/quiz/computer-science" component={QuizCSPage} />
          <Route exact path="/quiz/sports" component={QuizSportsPage} />
        </Switch>
      </Suspense>
    </MainLayout>
  </Router>
);

export default Routing;
