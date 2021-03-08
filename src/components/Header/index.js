import React from 'react';
import { Image } from 'react-native';

import Icon from 'react-native-vector-icons/AntDesign';

import { Container, SignOutButton } from './styles';
  
const Header = () => {
  return (
    <Container>
      <Image source={require('../../../assets/Logotipo.png')} width={120} height={24} />

      <SignOutButton onPress={() => {}}>
        <Icon name="poweroff" size={24} color="#FF6680" />
      </SignOutButton>
    </Container>
  );
}

export default Header;