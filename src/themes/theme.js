import { createTheme, responsiveFontSizes } from '@material-ui/core';

let theme = createTheme({
    palette: {
        background: {
            default: '#F3F4FA',
        },
        primary: {
            light: '#FFFFFF',
            main: '#918F96',
            dark: '#00000',
            contrastText: '#fff',
        },
        secondary: {
            light: '#fff',
            main: '#5efbda',
            dark: '#00c7a9',
            contrastText: '#000',
        },
    },
    typography: {
        fontFamily: ['Source Sans Pro', 'sans-serif'].join(','),
    },
});

theme = responsiveFontSizes(theme);

export { theme };