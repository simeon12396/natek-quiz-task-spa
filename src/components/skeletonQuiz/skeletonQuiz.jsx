import { makeStyles } from '@material-ui/core/styles';
import { Paper, CardActions, Typography  } from '@material-ui/core';
import CustomButton from '../common/buttons/customButton';
import { useState } from "react";
import { RadioGroup, FormControlLabel, Radio  } from '@material-ui/core';
import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { setCSResult, setRestartCSQuiz } from '../../store/actions/computerScienceQuizActions/computerSceinceQuizActions';
import { setRestartSportsQuiz, setSportsResult } from '../../store/actions/sportsQuizActions/sportsQuizActions';
import CustomSnackbar from '../common/snackbar/customSnackbar';

const SkeletonQuiz = (props) => {
    const { questions, quizType } = props;
    const { booleanQuestions, multipleChoicesQuestions } = questions;

    const dispatch = useDispatch();
    const styles = useStyles();
    const [questionCounter, setQuestionCounter] = useState(0);
    const [selectedCurrentAnswers, setSelectedCurrentAnswer] = useState("");
    const [selectedAnswers, setSelectedAnswers] = useState([]);
    const [openAlert, setOpenAlert] = useState({ optionAlert: false, modeAlert: false });
    const [isQuizSubmitted, setIsQuizSubmitted] = useState(false);
    const [quizMode, setQuizMode] = useState("binary");
    
    const booleanAnswerOptions = [...booleanQuestions.results[questionCounter].incorrect_answers, booleanQuestions.results[questionCounter].correct_answer];
    const multipleChoicesAnswerOptions = [...multipleChoicesQuestions.results[questionCounter].incorrect_answers, multipleChoicesQuestions.results[questionCounter].correct_answer];

    const handleCloseAlert = (alertType) => (e) => {
        if (alertType === "option-alert") {
            setOpenAlert({optionAlert: true, modeAlert: false});

            setTimeout(() => {
                setOpenAlert({optionAlert: false, modeAlert: false});
            }, 1500);

            return;
        }

        if (alertType === "mode-alert") {
            setOpenAlert({optionAlert: false, modeAlert: true});

            setTimeout(() => {
                setOpenAlert({optionAlert: false, modeAlert: false});
            }, 1500);

            return;
        }
    };

    const handleClickNext = () => {
        if(selectedCurrentAnswers === "") {
            setOpenAlert({optionAlert: true, modeAlert: false});
            return;
        };

        setSelectedCurrentAnswer("");
        setQuestionCounter(currState => currState + 1);
    };

    const handleClickSubmit = () => {
        const correctAnswers = quizMode === "binary" ? booleanQuestions.results.map(b => b.correct_answer) : multipleChoicesQuestions.results.map(b => b.correct_answer);
        const answerResults = correctAnswers.map((c, index) => selectedAnswers[index] === c ? 
        ({ isCorrect: true, correctAnswer: c, yourAnswer: selectedAnswers[index] }) : 
        ({ isCorrect: false, correctAnswer: c, yourAnswer: selectedAnswers[index]}));
        setIsQuizSubmitted(true);
        dispatch(quizType === "computer-science" ? setCSResult({ answerResults, quizMode }) : setSportsResult({ answerResults, quizMode }));
    };

    const handleChangeOption = (e) => {
        const targetValue = e.target.value;

        if (selectedCurrentAnswers !== "") {
            setOpenAlert({optionAlert: false, modeAlert: true});
            return;
        };

        setSelectedCurrentAnswer(targetValue);
        setSelectedAnswers([...selectedAnswers, targetValue]);
    };

    const handleClickRestart = () => resetQuiz();

    const handleChangeQuizMode = (e) => {
        setQuizMode(e.target.value);
        resetQuiz();
    };

    const resetQuiz = () => {
        setQuestionCounter(0);
        setSelectedCurrentAnswer("");
        setSelectedAnswers([]);
        setOpenAlert({openAlert: false, modeAlert: false});
        setIsQuizSubmitted(false);
        dispatch(quizType === "computer-science" ? setRestartCSQuiz() : setRestartSportsQuiz());
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

                <div className={styles.quizModeContainer}>
                    <Typography variant="body1">Select mode:</Typography>
                    <RadioGroup name="quizMode" value={quizMode} onChange={handleChangeQuizMode} classes={{root: styles.radioGroupModeRoot}}>
                        <FormControlLabel value={"binary"} control={<Radio classes={{checked: styles.radioChecked}} />} label="Binary" />
                        <FormControlLabel value={"multiple"} control={<Radio classes={{checked: styles.radioChecked}} />} label="Multiple" />
                    </RadioGroup>
                </div>
        
                <Paper elevation={0} className={styles.contentQuiz}>
                    <div>
                        { quizMode === "binary" && <Typography variant="body2">{booleanQuestions.results[questionCounter].question}</Typography> }
                        { 
                            quizMode === "multiple" && 
                            <Typography variant="body2">{multipleChoicesQuestions.results[questionCounter].question}</Typography>
                        }                             
                    </div>
                    <div>
                        <RadioGroup name="quizOptions" value={selectedCurrentAnswers} onChange={handleChangeOption} classes={{root: styles.radioGruoupOptionRoot}}>
                            { 
                                quizMode === "binary" && 
                                booleanAnswerOptions.map(b => (
                                    <FormControlLabel value={b} control={<Radio classes={{checked: styles.radioChecked}} />} label={b === "True" ? "Yes" : "No"} key={b} />))
                            }
                            {
                                quizMode === "multiple" &&  
                                multipleChoicesAnswerOptions.map(m => (
                                    <FormControlLabel value={m} control={<Radio classes={{checked: styles.radioChecked}} />} label={m} key={m} />))
                            }
                        </RadioGroup>
                    </div>
                </Paper>
                <CardActions classes={{root: styles.cardActionsRoot}}>
                    <CustomButton disabled={questionCounter === 9 ? true : false} onClick={handleClickNext}>Next question</CustomButton>

                    { questionCounter === 9 && <CustomButton onClick={handleClickSubmit} disabled={isQuizSubmitted}>Submit</CustomButton>}
                    
                    { isQuizSubmitted && 
                        <CustomButton variant="contained" color="primary" className={styles.restartButton} onClick={handleClickRestart}>Restart</CustomButton>
                    }

                    { isQuizSubmitted && 
                        <CustomButton variant="contained" color="primary">
                            <NavLink to={`/quiz/${quizType === "sports" ? "sports" : "computer-science"}-result`} className={styles.link}>View Result</NavLink>
                        </CustomButton>
                    }
                </CardActions>
            </Paper>
            
            { 
                openAlert.optionAlert &&
                <CustomSnackbar
                    alertType="option-alert" 
                    openAlert={openAlert.optionAlert} 
                    handleCloseAlert={handleCloseAlert} 
                    delayHideDuration={1500} 
                    closeLabel="Close"
                    messageLabel="You can't send empty answer! Please, enter one of the options!"
                />
            }

            { 
                openAlert.modeAlert &&
                <CustomSnackbar
                    alertType="mode-alert" 
                    openAlert={openAlert.modeAlert} 
                    handleCloseAlert={handleCloseAlert} 
                    delayHideDuration={1500} 
                    closeLabel="Close"
                    messageLabel="You've already selected an answer!"
                />
            }
        </>
    );
};

export default SkeletonQuiz;

const useStyles = makeStyles((theme) => ({
    headerQuiz: {
        padding: theme.spacing(2),
        [theme.breakpoints.down("sm")]: {
            padding: theme.spacing(1),
        }
    },
    contentQuiz: {
        padding: theme.spacing(2),
        [theme.breakpoints.down("sm")]: {
            padding: theme.spacing(1),
        },
        display: "flex",
        [theme.breakpoints.down("xs")]: {
            flexDirection: "column"
        },

        "& > div:nth-child(1)": {
            flex: "0 1 60%",
            display: "flex",
            alignItems: "center",
            marginRight: theme.spacing(1),
            
            "& > p": {
                [theme.breakpoints.down("xs")]: {
                    textAlign: "center"
                }
            }
        },
        "& > div:nth-child(2)": {
            display: "flex",
            flex: "0 1 40%",
            [theme.breakpoints.down("xs")]: {
                justifyContent: "center"
            }
        }
    },
    cardActionsRoot: {
        justifyContent: "center",

        "& > button": {
            [theme.breakpoints.down("xs")]: {
                fontSize: 10
            }
        }
    },
    questionTitle: {
        display: "flex",
        alignItems: "center",
        [theme.breakpoints.down("xs")]: {
            justifyContent: "center"
        }
    },
    radioChecked: {
        color: `${theme.palette.primary.main} !important`
    },
    link: {
        color: theme.palette.secondary.main,
        textDecoration: "none"
    },
    restartButton: {
        color: "white"
    },
    quizModeContainer: {
        display: "flex",
        alignItems: "center",
        padding: theme.spacing(2),
        [theme.breakpoints.down("sm")]: {
            padding: theme.spacing(1),
        },
        [theme.breakpoints.down("xs")]: {
            justifyContent: "center"
        }
    },
    radioGroupModeRoot: {
        display: "flex",
        flexDirection: "row",
        marginLeft: 10
    },
    radioGruoupOptionRoot: {
        [theme.breakpoints.down("xs")]: {
            display: "flex",
            flexDirection: "row",
            justifyContent: "center"
        }
    }
  }));