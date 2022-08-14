import React from 'react';

import { Container, Logo, Wrapper, Image } from './menuStyles';
import logo from '../../img/logo.png';

const Menu = () => {
  return (
    <Container>
      <Wrapper>
        <Logo>
          <Image src={logo} alt='logo' />
          VidShare
        </Logo>
      </Wrapper>
    </Container>
  );
};

export default Menu;
