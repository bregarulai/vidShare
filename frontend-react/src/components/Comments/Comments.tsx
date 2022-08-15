import React from 'react';

import { Avatar, Container, Input, NewComment } from './commentsStyles';
import channelLogo from '../../img/logo1.png';

const Comments = () => {
  return (
    <Container>
      <NewComment>
        <Avatar src={channelLogo} alt='Avatar' />
        <Input placeholder='Add a comment...' />
      </NewComment>
    </Container>
  );
};

export default Comments;
