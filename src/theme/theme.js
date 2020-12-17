import { createMuiTheme } from '@material-ui/core/styles';
import purple from '@material-ui/core/colors/purple';
import green from '@material-ui/core/colors/green';

const MaterialUITheme = createMuiTheme({
    palette: {
        primary: {
            main: "#08518b",
        },
        secondary: {
            main: "#fff",
        },
    },
});

export default MaterialUITheme;