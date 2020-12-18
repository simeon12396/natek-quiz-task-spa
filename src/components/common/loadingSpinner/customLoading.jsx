import CircularProgress from '@material-ui/core/CircularProgress';
import LinearProgress from '@material-ui/core/LinearProgress';
import { makeStyles } from "@material-ui/core/styles";

const CustomLoading = (props) => {
    const styles = useStyles();

    const { loadingType, color, variant, ...rest } = props;

    if (loadingType === "circular") {
        return(<CircularProgress color={color} variant={variant} {...rest} classes={{root: styles.circularRoot}}/>)
    }

    if (loadingType === "linear") {
        return(<LinearProgress color={color} variant={variant} {...rest} classes={{root: styles.linearRoot}}/>)
    }
}

export default CustomLoading;

const useStyles = makeStyles(theme => ({
    circularRoot: {
        width: "60px! important",
        height: "60px! important",
        position: "fixed",
        left: "50%",
        top: "50%"
    },
    linearRoot: {
        width: 500
    }
}));