import React from 'react';

import Header from '../../components/Header';

import { Wrapper, Content, Title } from './styles';

const Home = () => {
  return (
    <Wrapper>
      <Header />
      <Content>
        <Title>Content</Title>
      </Content>
    </Wrapper>
  );
}

export default Home;