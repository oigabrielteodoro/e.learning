import styled from 'styled-components/native';

export const IconWrapper = styled.View`
  position: absolute;

  top: 0;
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: center;

  border-top-width: 2px;
  border-top-color: ${({ focused }) => focused ? '#ff6680' : 'transparent'};

  padding-top: 10px;
`;

export const NavigationBarButton = styled.TouchableOpacity`
  display: flex;
  flex-direction: row;
  align-items: center;
`;