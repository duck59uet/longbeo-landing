import React from 'react';
import {
  ThemeProvider
} from '@mui/material/styles';
import { muiTheme } from './mui-theme';

export const withMuiTheme = (Component: React.FC<any>) => (props: any) => (
  <ThemeProvider theme={muiTheme}>
    <Component {...props} />
  </ThemeProvider>
);