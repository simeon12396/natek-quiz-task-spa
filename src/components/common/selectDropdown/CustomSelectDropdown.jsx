import { makeStyles } from '@material-ui/core/styles';
import { useState } from "react";
import { Button, Menu, MenuItem} from '@material-ui/core';
import { NavLink } from 'react-router-dom';

const CustomSelectDropdown = () => {
    const styles = useStyles();
    const[anchorEl, setAnchorEl] = useState(null);

    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
      setAnchorEl(null);
    };

    const listItems = [
        { link: "/quiz/computer-science", label: "Computer Science"},
        { link: "/quiz/sports", label: "Sports"}
    ];
    
    return(
        <>
            <Button aria-controls="select-menu" aria-haspopup="true" onClick={handleClick} classes={{root: styles.buttonDropdown}}>
                Quiz Category
            </Button>
            <Menu
                id="select-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
            >
                {listItems.map(l => (
                    <MenuItem onClick={handleClose} key={l.label}>
                        <NavLink to={l.link} className={styles.link}>{l.label}</NavLink>
                    </MenuItem>
                ))}
            </Menu>
        </>
    )
};

export default CustomSelectDropdown;

const useStyles = makeStyles((theme) => ({
    root: {},
    buttonDropdown: {
        color: theme.palette.secondary.main
    },
    link: {
        textDecoration: "none",
        color: theme.palette.primary.main,
        width: "100%"
    }
  }));