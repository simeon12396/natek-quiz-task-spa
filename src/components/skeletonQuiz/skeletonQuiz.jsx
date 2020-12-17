import { makeStyles } from '@material-ui/core/styles';
import { Paper, CardActions, Typography  } from '@material-ui/core';
import CustomButton from '../common/buttons/customButton';
import { useState } from "react";

const SkeletonQuiz = (props) => {
    const { questions } = props;
    const { computerScienceBooleanQuestions, computerScienceMultipleChoicesQuestions } = questions;
    
    const styles = useStyles();
    const [questionCounter, setQuestionCounter] = useState(0);
    const [correctAnswer, setCorrectAnswer] = useState("");
    const [incorrectAnswers, setIncorrectAnswers] = useState([]);
    const [allAnswers, setAllAnswers] = useState([]);

    const handleClickNext = () => setQuestionCounter(currState => currState + 1);
    const handleClickPrev = () => setQuestionCounter(currState => currState - 1);
    
    if(!questions) {
        return [];
    };

    return(
        <Paper elevation={3}>
            <Paper elevation={0} className={styles.headerQuiz}>
                <div className={styles.questionTitle}>
                    <Typography variant="h5">{`Question ${questionCounter + 1}`}</Typography>
                    <Typography variant="body1">/10</Typography>
                </div>
            </Paper>

            <Paper elevation={0} className={styles.contetQuiz}>
                <div>
                    <Typography variant="body2">{`${computerScienceBooleanQuestions.results[questionCounter].question}`}</Typography>
                </div>
                <div>
                    <CustomButton>{computerScienceBooleanQuestions.results[questionCounter].correct_answer}</CustomButton>
                    {computerScienceBooleanQuestions.results[questionCounter].incorrect_answers.map(i => (<CustomButton>{i}</CustomButton>))}
                </div>
            </Paper>
            <CardActions classes={{root: styles.cardActionsRoot}}>
                <CustomButton disabled={questionCounter === 0 ? true : false} onClick={handleClickPrev}>Prev question</CustomButton>

                <CustomButton disabled={questionCounter === 9 ? true : false} onClick={handleClickNext}>Next question</CustomButton>
            </CardActions>
        </Paper>
    )
};

export default SkeletonQuiz;

const useStyles = makeStyles((theme) => ({
    headerQuiz: {
        padding: 8,
    },
    contetQuiz: {
        padding: 8,
        display: "flex",

        "& > div:nth-child(1)": {
            flex: "0 1 60%"
        },
        "& > div:nth-child(2)": {
            display: "flex",
            flex: "0 1 40%"
        }
    },
    cardActionsRoot: {
        justifyContent: "space-between"
    },
    questionTitle: {
        display: "flex",
        alignItems: "center"
    }
  }));