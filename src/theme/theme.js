import { createMuiTheme } from '@material-ui/core/styles';

const MaterialUITheme = createMuiTheme({
    palette: {
        primary: {
            main: "#08518b",
            green: "green",
            red: "red"
        },
        secondary: {
            main: "#fff",
            secondary: "silver"
        },
    },
});

export default MaterialUITheme;