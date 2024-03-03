import React from 'react';
import { makeStyles } from '@material-ui/core';
import MyCustomLogo from './logo/platformers-logo-sq.png';

const useStyles = makeStyles({
  svg: {
    width: 'auto',
    height: 28,
  },
  path: {
    fill: '#7df3e1',
  },
});

const LogoIcon = () => {
  return <img src={MyCustomLogo} width="30" height="30" alt="logo icon" />;
};

export default LogoIcon;
