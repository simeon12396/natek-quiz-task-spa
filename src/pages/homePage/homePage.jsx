import { Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import QuizImage from "../../pictures/quizImage.png";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { fetchCSBooleanQuestions, fetchCSMultipleChoicesQuestions } from "../../store/actions/computerScienceQuizActions/computerSceinceQuizActions";
import { fetchSportsBooleanQuestions, fetchSportsMultipleChoicesQuestions } from "../../store/actions/sportsQuizActions/sportsQuizActions";

const HomePage = () => {
    const styles = useStyles();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchCSBooleanQuestions());
        dispatch(fetchCSMultipleChoicesQuestions());
        dispatch(fetchSportsBooleanQuestions());
        dispatch(fetchSportsMultipleChoicesQuestions());
    }, []);

    return(
     <div className={styles.root}>
        <Typography variant="h3" className={styles.homeTitle}>Welcome to Natek Quiz!</Typography>
        <img src={QuizImage} alt="Quiz Image" className={styles.quizImage}/>
    </div>
    )
};

export default HomePage;

const useStyles = makeStyles(theme => ({
    root: {
        margin: "0 auto",
        height: 500,
        width: 800,
        [theme.breakpoints.down("sm")]: {
            width: 600
        },
        [theme.breakpoints.down("xs")]: {
            width: "100%"
        },
        color: theme.palette.primary.main,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center"
    },
    homeTitle: {
        marginBottom: 30,
        [theme.breakpoints.down("xs")]: {
            fontSize: "2rem",
            textAlign: "center"
        },
    },
    quizImage: {
        width: "inherit",
        [theme.breakpoints.down("sm")]: {
            width: 400
        },
        [theme.breakpoints.down("xs")]: {
            width: 300
        },
    }
}));