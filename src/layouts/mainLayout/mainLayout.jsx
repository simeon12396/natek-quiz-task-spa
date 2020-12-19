import Footer from "../../components/footer/footer";
import Header from "../../components/header/header";
import { makeStyles } from "@material-ui/core/styles";

const MainLayout = ({ children }) => {
  const styles = useStyles();

  return (
    <div>
      <Header />
      <main className={styles.main}>{children}</main>
      <Footer />
    </div>
  );
};

export default MainLayout;

const useStyles = makeStyles((theme) => ({
  main: {
    "& > div": {
      height: "calc(100vh - 120px)",
    },
  },
}));
