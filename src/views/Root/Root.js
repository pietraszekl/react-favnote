import React from 'react';
import Button from '../../components/Button/Button';
import GlobalStyles from '../../theme/GlobalStyle';

const Root = () => (
  <>
    <GlobalStyles />
    <h1>BOOM</h1>
    <Button>Close / Save</Button>
    <Button secondary>Remove</Button>
  </>
);

export default Root;
