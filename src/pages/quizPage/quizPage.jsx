import { makeStyles } from '@material-ui/core/styles';
import SkeletonQuiz from '../../components/skeletonQuiz/skeletonQuiz';
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

const QuizPage = () => {
    const { quizType } = useParams();
    const styles = useStyles();

    const csQuizQuestions = useSelector(state => state.computerScienceQuizQuestions);
    const selectQuestions = quizType === 'computer-science-quiz' ? csQuizQuestions : [];

    return(
        <div className={styles.root}>
            <div className={styles.quizContainer}>
                <SkeletonQuiz questions={selectQuestions} />
            </div>
        </div>
    )
};

export default QuizPage;

const useStyles = makeStyles((theme) => ({
    root: {
        display: "flex",
        justifyContent: "center",
    },
    quizContainer: {
        width: 600
    }
  }));