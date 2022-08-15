import React from 'react';

import {
  Avatar,
  CommentDetails,
  Container,
  Date,
  Name,
  Text,
} from './commentStyles';
import channelLogo from '../../img/logo1.png';
const Comment = () => {
  return (
    <Container>
      <Avatar src={channelLogo} alt='avatar' />
      <CommentDetails>
        <Name>
          Test Commenter <Date>1 day ago</Date>
        </Name>
        <Text>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vel, ex
          laboriosam ipsam aliquam voluptatem perferendis provident modi, sequi
          tempore reiciendis quod, optio ullam cumque? Quidem numquam sint
          mollitia totam reiciendis?
        </Text>
      </CommentDetails>
    </Container>
  );
};

export default Comment;
