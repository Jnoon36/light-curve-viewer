import { createTheme, Theme } from '@mui/material/styles';

/**
 * To add custom properties to the MUI theme, we need to perform module augmentation.
 * This tells the compiler that a class or interface needs to be merged with another declaration
 * See --> https://www.typescriptlang.org/docs/handbook/declaration-merging.html
 *
 * See the following link for an MUI example --> https://mui.com/material-ui/customization/theming/#typescript
 */
declare module '@mui/material/styles' {
  interface Palette {
    lcvGray: string;
  }

  interface PaletteOptions {
    lcvGray?: string;
  }
}

const theme: Theme = createTheme({
  palette: {
    lcvGray: 'rgb(80, 80, 80)',
  },
  typography: {
    fontFamily: 'sans-serif',
  },
});

export default theme;
