import { makeStyles } from '@material-ui/core/styles';
import SkeletonQuiz from '../../components/skeletonQuiz/skeletonQuiz';
import { useSelector } from "react-redux";

const QuizComputerSciencePage = () => {
    const styles = useStyles();
    const csQuizQuestions = useSelector(state => state.computerScienceQuizQuestions);

    return(
        <div className={styles.root}>
            <div className={styles.quizContainer}>
                <SkeletonQuiz questions={csQuizQuestions} selectedMode="binary" />
            </div>
        </div>
    )
};

export default QuizComputerSciencePage;

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