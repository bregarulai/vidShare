import React from 'react';

import {
  ChannelImage,
  ChannelName,
  Container,
  Details,
  Image,
  Info,
  Texts,
  Title,
} from './cardStyles';
import channelLogo from '../../img/logo1.png';
import { Link } from 'react-router-dom';

const Card = () => {
  return (
    <Link to={`/video/test`}>
      <Container>
        <Image
          src='https://i9.ytimg.com/vi_webp/k3Vfj-e1Ma4/mqdefault.webp?v=6277c159&sqp=CIjm8JUG&rs=AOn4CLDeKmf_vlMC1q9RBEZu-XQApzm6sA'
          alt='video'
        />
        <Details>
          <ChannelImage src={channelLogo} alt='channelLogo' />
          <Texts>
            <Title>Test Video</Title>
            <ChannelName>Bregacode</ChannelName>
            <Info>660,908 views • 1 day ago</Info>
          </Texts>
        </Details>
      </Container>
    </Link>
  );
};

export default Card;
