import styled from 'styled-components/native';

export const Wrapper = styled.View`
  background: #6548A3;
  padding: 24px;
`;

export const Container = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const SignOutButton = styled.TouchableOpacity``;

export const SearchBarWrapper = styled.View`
  background: #fff;
  border-radius: 100px;

  display: flex;
  align-items: center;
  flex-direction: row;

  padding: 20px 26.5px;

  margin-top: 24px;
`;

export const SearchIcon = styled.View`
  margin-right: 16px;
`;

export const SearchTextInput = styled.TextInput`
  color: #c4c4d1;
  font-size: 15px;
  font-family: 'Roboto-Regular';

  flex: 1;
`;