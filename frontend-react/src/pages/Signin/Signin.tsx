import React from 'react';
import {
  Button,
  Container,
  Input,
  Link,
  Links,
  More,
  SubTitle,
  Title,
  Wrapper,
} from './signinStyles';

const Signin = () => {
  return (
    <Container>
      <Wrapper>
        <Title>Sign in</Title>
        <SubTitle>to continue to VidShare</SubTitle>
        <Input placeholder='username' />
        <Input type='password' placeholder='password' />
        <Button>Sign in</Button>
        <Title>or</Title>
        <Input placeholder='username' />
        <Input type='email' placeholder='email' />
        <Input type='password' placeholder='password' />
        <Button>Sign up</Button>
      </Wrapper>
      <More>
        English(USA)
        <Links>
          <Link>Help</Link>
          <Link>Privacy</Link>
          <Link>Terms</Link>
        </Links>
      </More>
    </Container>
  );
};

export default Signin;
