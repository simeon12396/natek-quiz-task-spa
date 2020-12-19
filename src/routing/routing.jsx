import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import CustomLoading from "../components/common/loadingSpinner/customLoading";
import MainLayout from "../layouts/mainLayout/mainLayout";

const HomePage = lazy(() => import("../pages/homePage/homePage"));
const QuizCSPage = lazy(() => import('../pages/quizComputerSciencePage/quizComputerSciencePage'));
const QuizMusicPage = lazy(() => import('../pages/quizMusicPage/quizMusicPage'));
const QuizResultPage = lazy(() => import("../pages/quizResultPage/quizResultPage"));

//TODO If you have a several different quiz types, the better solution will be to createa a route with dynamic parameter, like '/:quizType'. 

const Routing = () => (
  <Router>
    <MainLayout>
      <Suspense fallback={<CustomLoading loadingType="circular" />}>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/quiz/computer-science" component={QuizCSPage} />
          <Route exact path="/quiz/music" component={QuizMusicPage} />
          <Route exact path="/quiz/:quizTypeResult-result" component={QuizResultPage} />
        </Switch>
      </Suspense>
    </MainLayout>
  </Router>
);

export default Routing;
