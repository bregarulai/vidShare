import React from 'react';
import ThumbUpOutlinedIcon from '@mui/icons-material/ThumbUpOutlined';
import ThumbDownOffAltOutlinedIcon from '@mui/icons-material/ThumbDownOffAltOutlined';
import ReplyOutlinedIcon from '@mui/icons-material/ReplyOutlined';
import AddTaskOutlinedIcon from '@mui/icons-material/AddTaskOutlined';

import {
  Button,
  Buttons,
  Channel,
  ChannelCounter,
  ChannelDescription,
  ChannelDetail,
  ChannelInfo,
  ChannelName,
  Container,
  Content,
  Details,
  Hr,
  Image,
  Info,
  Recommendation,
  Subscribe,
  Title,
  VideoWrapper,
} from './videoStyles';
import channelLogo from '../../img/logo1.png';
import { Comments } from '../../components';

const Video = () => {
  return (
    <Container>
      <Content>
        <VideoWrapper>
          <iframe
            width='100%'
            height='720'
            src='https://www.youtube.com/embed/k3Vfj-e1Ma4'
            title='YouTube video player'
            frameBorder='0'
            allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
            allowFullScreen
          ></iframe>
        </VideoWrapper>
        <Title>Test Video</Title>
        <Details>
          <Info>7,948,154 views • Jun 22, 2022</Info>
          <Buttons>
            <Button>
              <ThumbUpOutlinedIcon /> 123
            </Button>
            <Button>
              <ThumbDownOffAltOutlinedIcon /> Dislike
            </Button>
            <Button>
              <ReplyOutlinedIcon /> Share
            </Button>
            <Button>
              <AddTaskOutlinedIcon /> Save
            </Button>
          </Buttons>
        </Details>
        <Hr />
        <Channel>
          <ChannelInfo>
            <Image src={channelLogo} alt='logo' />
            <ChannelDetail>
              <ChannelName>Bregacode</ChannelName>
              <ChannelCounter>200k subscribers</ChannelCounter>
              <ChannelDescription>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Doloribus laborum delectus unde quaerat dolore culpa sit aliquam
                at. Vitae facere ipsum totam ratione exercitationem. Suscipit
                animi accusantium dolores ipsam ut.
              </ChannelDescription>
            </ChannelDetail>
          </ChannelInfo>
          <Subscribe>Subscribe</Subscribe>
        </Channel>
        <Hr />
        <Comments />
      </Content>
      <Recommendation>Recommendation</Recommendation>
    </Container>
  );
};

export default Video;
