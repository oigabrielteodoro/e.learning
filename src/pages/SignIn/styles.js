import styled from 'styled-components/native';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';

export const Wrapper = styled.View`
  padding-top: ${() => `${getStatusBarHeight()}px`};
  background: #6548a3;
  flex: 1;

  position: relative;
`;

export const ElearningLogo = styled.Image`
  position: absolute;
  z-index: -1;
  top: 55px;
`;

export const Container = styled.View`
  margin: 131px 36px 0;
`;

export const Title = styled.Text`
  font-size: 33px;
  font-family: 'Rubik-Medium';
  line-height: 42.66px;
  max-width: 225px;
  color: #ff6680;
  margin-top: 65px;
`;

export const Message = styled.Text`
  color: #edebf5;
  font-family: 'Roboto-Regular';
  font-size: 18px;
  line-height: 25px;
  margin-top: 16px;
  max-width: 217px;
`;

export const StartButton = styled.TouchableOpacity`
  background: #ff6680;
  border-radius: 100px;
  padding: 20px 82px;
  margin-top: 40px;

  display: flex;
  align-items: center;
`;

export const StartButtonText = styled.Text`
  color: #fff;
  font-size: 15px;
  line-height: 17px;
  font-family: 'Roboto-Medium';
`;