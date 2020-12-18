import { Typography } from "@material-ui/core";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import CustomTable from "../../components/common/table/customTable";
import { makeStyles } from '@material-ui/core/styles';

const QuizResultPage = () => {
    const { quizTypeResult } = useParams();
    const resultSelector = useSelector(state => quizTypeResult === "sports" ? state.sportsQuizQuestions.result : state.computerScienceQuizQuestions.result);
    const { answerResults } = resultSelector;
    const correctedAnswers = answerResults.filter(a => a.isCorrect === true).length;
    const correctedAnswersToPercent = correctedAnswers * 100 / 10;
    const styles = useStyles();

    const rowTitles = [
        { id: 0, label: "Questions" },
        { id: 1, label: "Correct Answer" },
        { id: 2, label: "Your Answer" },
        { id: 3, label: "Is correct" }
    ];

    return (
        <div>
            <CustomTable alignment="center" answers={resultSelector.answerResults} rowTitles={rowTitles} />
            <Typography variant="h6" className={styles.resultTitle}>{`You have ${correctedAnswers} of 10 (${correctedAnswersToPercent}%) correct answers!`}</Typography>
        </div>
    )
};

export default QuizResultPage;

const useStyles = makeStyles((theme) => ({
    resultTitle: {
        textAlign: "right",
        margin: "1rem 2rem 0 0"
    }
}));