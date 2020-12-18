import { makeStyles } from '@material-ui/core/styles';
import { AppBar, Toolbar, Typography } from '@material-ui/core';
import { NavLink } from 'react-router-dom';
import CustomSelectDropdown from '../common/selectDropdown/customSelectDropdown';

const Header = () => {
    const styles = useStyles();

    return(
        <AppBar position="static">
            <Toolbar>
                <Typography variant="h6">
                    <NavLink to="/" className={styles.link}>Natek Quiz App</NavLink>
                </Typography>
                <div className={styles.listItemsWrapper}>
                    <CustomSelectDropdown />
                </div>
            </Toolbar>
        </AppBar>
    )
};

export default Header;

const useStyles = makeStyles((theme) => ({
    root: {},
    listItemsWrapper: {
        marginLeft: "auto",
        marginRight: 10
    },
    link: {
        textDecoration: "none",
        color: theme.palette.secondary.main
    }
  }));