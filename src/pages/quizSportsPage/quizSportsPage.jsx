import { makeStyles } from '@material-ui/core/styles';
import SkeletonQuiz from '../../components/skeletonQuiz/skeletonQuiz';
import { useSelector } from "react-redux";

const QuizSportsPage = () => {
    const styles = useStyles();
    const sportsQuizQuestions = useSelector(state => state.sportsQuizQuestions);

    return(
        <div className={styles.root}>
            <div className={styles.quizContainer}>
                <SkeletonQuiz questions={sportsQuizQuestions} selectedMode="multiple" />
            </div>
        </div>
    )
};

export default QuizSportsPage;

const useStyles = makeStyles((theme) => ({
    root: {
        display: "flex",
        justifyContent: "center",
    },
    quizContainer: {
        width: 600,
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    }
  }));