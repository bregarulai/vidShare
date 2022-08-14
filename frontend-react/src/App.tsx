import styled from '@emotion/styled';
import React from 'react';
import { Menu, Navbar } from './components';

const Container = styled.div``;

const Main = styled.div``;
const Wrapper = styled.div``;

function App() {
  return (
    <Container>
      <Menu />
      <Main>
        <Navbar />
        <Wrapper>Video Cards</Wrapper>
      </Main>
    </Container>
  );
}

export default App;
