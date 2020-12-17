import { makeStyles } from '@material-ui/core/styles';
import { Paper, CardActions, Typography, Snackbar, Button, IconButton  } from '@material-ui/core';
import CustomButton from '../common/buttons/customButton';
import { useState } from "react";
import { RadioGroup, FormControlLabel, Radio  } from '@material-ui/core';

const SkeletonQuiz = (props) => {
    const { questions, selectedMode } = props;
    const { booleanQuestions, multipleChoicesQuestions } = questions;

    const styles = useStyles();
    const [questionCounter, setQuestionCounter] = useState(0);
    const [selectedCurrentAnswers, setSelectedCurrentAnswer] = useState("");
    const [selectedAnswers, setSelectedAnswers] = useState([]);
    const [openAlert, setOpenAlert] = useState(false);

    const booleanAnswerOptions = [...booleanQuestions.results[questionCounter].incorrect_answers, booleanQuestions.results[questionCounter].correct_answer];
    const multipleChoicesAnswerOptions = [...multipleChoicesQuestions.results[questionCounter].incorrect_answers, multipleChoicesQuestions.results[questionCounter].correct_answer];

    const handleClose = () => {
        setOpenAlert(false);

        setInterval(() => {
            setOpenAlert(false);
        }, 6000);
    };
    const handleClickNext = () => {
        if(selectedCurrentAnswers === "") {
            setOpenAlert(true);
            return;
        };

        setSelectedCurrentAnswer("");
        setQuestionCounter(currState => currState + 1);
    };
    const handleClickSubmit = () => console.log("submit quiz");
    const handleChangeOption = (e) => {
        setSelectedCurrentAnswer(e.target.value);
        setSelectedAnswers([...selectedAnswers, {[questionCounter]: e.target.value}], [questionCounter]);
    };

    if (!questions) {
        return [];
    };

    return(
        <>
            <Paper elevation={3}>
                <Paper elevation={0} className={styles.headerQuiz}>
                    <div className={styles.questionTitle}>
                        <Typography variant="h5">{`Question ${questionCounter + 1}`}</Typography>
                        <Typography variant="body1">/10</Typography>
                    </div>
                </Paper>

                <Paper elevation={0} className={styles.contetQuiz}>
                    <div>
                        { selectedMode === "binary" && <Typography variant="body2">{`${booleanQuestions.results[questionCounter].question}`}</Typography> }
                        { 
                            selectedMode === "multiple" && 
                            <Typography variant="body2">{`${multipleChoicesQuestions.results[questionCounter].question}`}</Typography>
                        }                             
                    </div>
                    <div>
                        <RadioGroup aria-label="gender" name="gender1" value={selectedCurrentAnswers} onChange={handleChangeOption}>
                            { 
                                selectedMode === "binary" && 
                                booleanAnswerOptions.map(b => (<FormControlLabel value={b} control={<Radio classes={{checked: styles.radioChecked}} />} label={b} key={b}/>))
                            }
                            {
                                selectedMode === "multiple" &&  
                                multipleChoicesAnswerOptions.map(m => (<FormControlLabel value={m} control={<Radio classes={{checked: styles.radioChecked}} />} label={m} key={m}/>))
                            }
                        </RadioGroup>
                    </div>
                </Paper>
                <CardActions classes={{root: styles.cardActionsRoot}}>
                    <CustomButton disabled={questionCounter === 9 ? true : false} onClick={handleClickNext}>Next question</CustomButton>

                    {questionCounter === 9 && <CustomButton onClick={handleClickSubmit}>Submit</CustomButton>}

                </CardActions>
            </Paper>

            {openAlert && 
                <Snackbar
                    anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                    }}
                    open={openAlert}
                    autoHideDuration={6000}
                    onClose={handleClose}
                    message="You can't send empty answer! Please, enter one of the options!"
                    action={
                    <>
                        <Button color="secondary" size="small" onClick={handleClose}>Close</Button>
                        <IconButton size="small" aria-label="close" color="inherit" onClick={handleClose}>
                        </IconButton>
                    </>
                    }
                />
            }
        </>
    );
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
        justifyContent: "center"
    },
    questionTitle: {
        display: "flex",
        alignItems: "center"
    },
    radioChecked: {
        color: `${theme.palette.primary.main} !important`
    }
  }));