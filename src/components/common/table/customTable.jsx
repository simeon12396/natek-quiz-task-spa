import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const CustomTable = (props) => {
  const { answers, alignment, rowTitles } = props;

  const styles = useStyles();

  const checkIfItsCorrect = (isCorrect, correctAnswer) => (isCorrect ? `Correct! The right answer is: ${correctAnswer}` : `Sorry, you are wrong! The right answer is: ${correctAnswer}`);

  return (
    <TableContainer component={Paper}>
      <Table aria-label="customized table">
        <TableHead>
          <TableRow classes={{ root: styles.tableRowRootTitle }}>
            {rowTitles.map((r) => (
              <TableCell classes={{ root: styles.tableCellRoot }} align={alignment} key={r.id}>
                {r.label}
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {answers.map((row, index) => (
            <TableRow
              key={row.id}
              classes={{
                root: row.isCorrect ? styles.tableRowRootBodySuccess : styles.tableRowRootBodyError,
              }}
            >
              <TableCell classes={{ root: styles.tableCellRoot }} align={alignment}>{`Question ${index + 1}`}</TableCell>
              <TableCell classes={{ root: styles.tableCellRoot }} align={alignment}>
                {checkIfItsCorrect(row.isCorrect, row.correctAnswer)}
              </TableCell>
              <TableCell classes={{ root: styles.tableCellRoot }} align={alignment}>
                {row.yourAnswer}
              </TableCell>
              <TableCell classes={{ root: styles.tableCellRoot }} align={alignment}>
                {row.isCorrect ? "Yes" : "No"}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default CustomTable;

const useStyles = makeStyles((theme) => ({
  tableRowRootTitle: {
    background: theme.palette.primary.main,
    opacity: 0.9,
  },
  tableRowRootBodySuccess: {
    background: theme.palette.success.main,
    opacity: 0.8,
  },
  tableRowRootBodyError: {
    background: theme.palette.error.main,
    opacity: 0.9,
  },
  tableCellRoot: {
    color: "white",
    padding: 10,
  },
}));
