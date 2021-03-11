import styled from 'styled-components/native';

export const Container = styled.View`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Message = styled.Text`
  font-family: 'Rubik-Regular';
  font-size: 15px;
  line-height: 25px;
  text-align: center;
  margin-top: 28px;
  max-width: 152px;
  color: #6c6c80;
`;

export const ModalButtons = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: 16px;
`;

export const CancelButton = styled.TouchableOpacity``;

export const CancelButtonText = styled.Text`
  color: #ff6680;
  font-size: 15px;
  line-height: 18px;
  font-family: 'Roboto-Regular';
`;

export const AcceptButton = styled.TouchableOpacity`
  display: flex;
  flex-direction: column;
  align-items: center;

  padding: 11px 24px;
  background: #ff6680;

  border-radius: 100px;
  margin-left: 24px;
`;

export const AcceptButtonText = styled.Text`
  color: #fff;
  font-size: 15px;
  line-height: 18px;
  font-family: 'Roboto-Regular';
`;