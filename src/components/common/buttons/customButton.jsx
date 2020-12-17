import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const CustomButton = (props) => {
    const { children, ...rest } = props;

    const styles = useStyles();

    return(
        <Button {...rest} classes={{root: styles.buttonRoot}}>{children}</Button>
    )
};

export default CustomButton;

const useStyles = makeStyles((theme) => ({
    root: {
        display: "flex",
        justifyContent: "center",
    },
    buttonRoot: {
        border: `1px solid ${theme.palette.primary.main}`,
        color: theme.palette.primary.main
    }
  }));