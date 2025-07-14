import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
  typography: {
    button: {
      textTransform: 'none',
    },
  },
  palette: {
    type: 'light',
    primary: {
      main: '#E41469',
      contrastText: '#FAFAFA',
      dark: '#C11B5F',
      blue: '#232932',
    },
    secondary: {
      main: '#03ADB5',
      contrastText: '#1F1F1F',
      dark: '#0799A0',
      light: '#07C0C9',
    },
    neutral: {
      main: '#F5F5F5',
      secondary: '#F0F0F0',
      tertiary: '#D9D9D9',
    },
  },
});
