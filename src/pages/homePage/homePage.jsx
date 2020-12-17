import { Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import QuizImage from "../../pictures/quizImage.png";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { fetchCSBooleanQuestions, fetchCSMultipleChoicesQuestions } from "../../store/actions/computerScienceQuizActions/computerSceinceQuizActions";

const HomePage = () => {
    const styles = useStyles();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchCSBooleanQuestions());
        dispatch(fetchCSMultipleChoicesQuestions());
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
        color: theme.palette.primary.main,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center"
    },
    homeTitle: {
        marginBottom: 30,
    },
    quizImage: {
        width: "inherit",
    }
}));