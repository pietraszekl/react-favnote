import React from 'react';

import { ThemeProvider } from 'styled-components';
import Button from '../../components/atoms/Button/Button';
import Card from '../../components/molecules/Card/Card';
import GlobalStyles from '../../theme/GlobalStyle';
import { theme } from '../../theme/mainTheme';

const Root = () => (
  <>
    <GlobalStyles />
    <ThemeProvider theme={theme}>
      <h1>BOOM</h1>
      <Button>Close / Save</Button>
      <Button secondary>Remove</Button>
      <Card />
      <Card cardType="twitter" />
      <Card cardType="article" />
    </ThemeProvider>
  </>
);

export default Root;
