import { makeStyles } from "@material-ui/core/styles";
import SkeletonQuiz from "../../components/skeletonQuiz/skeletonQuiz";
import { useSelector } from "react-redux";

const QuizMusicPage = () => {
  const styles = useStyles();
  const musicQuizQuestions = useSelector((state) => state.musicQuizQuestions);

  return (
    <div className={styles.root}>
      <div className={styles.quizContainer}>
        <SkeletonQuiz questions={musicQuizQuestions} quizType="music" />
      </div>
    </div>
  );
};

export default QuizMusicPage;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    justifyContent: "center",
  },
  quizContainer: {
    width: 600,
    [theme.breakpoints.down("xs")]: {
      width: "100%",
    },
    display: "flex",
    justifyContent: "center",
    alignItems: "center",

    "& > div": {
      [theme.breakpoints.down("sm")]: {
        margin: theme.spacing(1.5),
      },
      [theme.breakpoints.down("xs")]: {
        margin: 0,
      },
    },
  },
}));
