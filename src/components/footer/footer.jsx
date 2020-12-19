import { makeStyles } from "@material-ui/core/styles";
import { BottomNavigation, Toolbar, Typography } from "@material-ui/core";

const Footer = () => {
  const styles = useStyles();

  return (
    <BottomNavigation classes={{ root: styles.bottomNavRoot }}>
      <Toolbar>
        <Typography variant="h6">Copyright &copy;</Typography>
      </Toolbar>
    </BottomNavigation>
  );
};

export default Footer;

const useStyles = makeStyles((theme) => ({
  bottomNavRoot: {
    position: "fixed",
    bottom: 0,
    width: "100vw",
    background: theme.palette.primary.main,
    color: theme.palette.secondary.main,
  },
}));
