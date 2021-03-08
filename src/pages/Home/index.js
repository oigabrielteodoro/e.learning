import React from 'react';
import { Text, Image } from 'react-native';

import Header from '../../components/Header';

import { Wrapper, Content } from './styles';

const Home = () => {
  return (
    <Wrapper>
      <Header />
      <Content>
        <Text>Content</Text>
      </Content>
    </Wrapper>
  );
}

export default Home;