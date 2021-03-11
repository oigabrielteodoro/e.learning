import React from 'react';
import { Image } from 'react-native';

import Icon from 'react-native-vector-icons/AntDesign';

import { useAuth } from '../../hooks/auth';

import { Wrapper, Container, SignOutButton, SearchBarWrapper, SearchIcon, SearchTextInput } from './styles';
  
const Header = () => {
  const { signOut } = useAuth();

  return (
    <Wrapper>
      <Container>
        <Image source={require('../../../assets/Logotipo.png')} width={120} height={24} />

        <SignOutButton onPress={signOut}>
          <Icon name="poweroff" size={24} color="#FF6680" />
        </SignOutButton>
      </Container>

      <SearchBarWrapper>
        <SearchIcon>
          <Icon name="search1" size={20} color="#c4c4d1" />
        </SearchIcon>

        <SearchTextInput placeholder="Busque um curso" />
      </SearchBarWrapper>
    </Wrapper>
  );
}

export default Header;