import { makeStyles } from '@material-ui/core/styles';
import SkeletonQuiz from '../../components/skeletonQuiz/skeletonQuiz';
import { useSelector } from "react-redux";

const QuizComputerSciencePage = () => {
    const styles = useStyles();
    const csQuizQuestions = useSelector(state => state.computerScienceQuizQuestions);

    return(
        <div className={styles.root}>
            <div className={styles.quizContainer}>
                <SkeletonQuiz questions={csQuizQuestions} quizType="computer-science" />
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
        [theme.breakpoints.down("xs")]: {
            width: "100%"
        },
        display: "flex",
        justifyContent: "center",
        alignItems: "center",

        "& > div": {
            [theme.breakpoints.down("sm")]: {
                margin: theme.spacing(1.5),
            },
            [theme.breakpoints.down("xs")]: {
                margin: 0
            }
        }
    }
  }));