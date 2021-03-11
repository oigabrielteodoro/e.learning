import React from 'react';

import { Image } from 'react-native';

import { useAuth } from '../../hooks/auth';

import { Wrapper, ElearningLogo, Container, Title, Message, StartButton, StartButtonText } from './styles';

const SignIn = () => {
  const { signIn } = useAuth();

  return (
    <Wrapper>
      <ElearningLogo source={require('../../../assets/e.learning.png')} alt="Elearning" />

      <Container>
        <Image source={require('../../../assets/Vector.png')} alt="Vector" />

        <Title>Aprenda da melhor forma</Title>
        <Message>Entre na plataforma e acesse cursos de diversas áreas de conhecimento.</Message>

        <StartButton onPress={signIn}>
          <StartButtonText>
            Começar os estudos
          </StartButtonText>
        </StartButton>
      </Container>
    </Wrapper>
  );
}

export default SignIn;