import { makeStyles } from "@material-ui/core/styles";

const HomePage = () => {
    const styles = useStyles();
    
    return(<h1 className={styles.root}>home page</h1>)
};

export default HomePage;

const useStyles = makeStyles(theme => ({
    root: {
        height: 500,
        width: 500,
        color: theme.palette.primary.main
    }
}));