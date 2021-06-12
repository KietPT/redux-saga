import { createMuiTheme } from '@material-ui/core/styles';
const theme = createMuiTheme({
    color: {
        primary: "#f06292",
        secondary: "#29b6f6",
        error: "#ffd54f",
        textColor: 'white',
        defaultTextColor: 'black',
        hoverColor: 'rgba(0,0,0,0.08)'
    },
    typography: {
        fontFamily: "Roboto"
    },
    shape: {
        borderRadius: 4,
        backgroundColor: "#9ccc65",
        textColor: "white",
        borderColor: "#8d6e63"
    }
})
export default theme