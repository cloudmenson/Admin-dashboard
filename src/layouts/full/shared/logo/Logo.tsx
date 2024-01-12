import React from 'react';
import { styled } from '@mui/material';
import { Link } from 'react-router-dom';

import { ReactComponent as LogoDark } from 'src/assets/images/logos/dark-logo.svg';

const LinkStyled = styled(Link)(() => ({
  display: 'block',
  height: '70px',
  width: '220px',
  overflow: 'hidden',
}));

const Logo = () => {
  return (
    <LinkStyled to="/">
      <LogoDark height={70} />
    </LinkStyled>
  );
};

export default Logo;
