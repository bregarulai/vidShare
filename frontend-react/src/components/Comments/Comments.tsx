import React from 'react';

import { Avatar, Container, Input, NewComment } from './commentsStyles';
import channelLogo from '../../img/logo1.png';
import { Comment } from '../../components';

const Comments = () => {
  return (
    <Container>
      <NewComment>
        <Avatar src={channelLogo} alt='Avatar' />
        <Input placeholder='Add a comment...' />
      </NewComment>
      <Comment />
      <Comment />
      <Comment />
      <Comment />
      <Comment />
      <Comment />
      <Comment />
    </Container>
  );
};

export default Comments;
