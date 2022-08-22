import React from 'react';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';

import { Container, Input, Search, Wrapper, Button } from './navbarStyles';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <Container>
      <Wrapper>
        <Search>
          <Input placeholder='Search' />
          <SearchOutlinedIcon />
        </Search>
        <Link to='signin'>
          <Button>
            <AccountCircleOutlinedIcon /> Sign in
          </Button>
        </Link>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
