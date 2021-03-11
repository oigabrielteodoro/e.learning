import styled, { css } from 'styled-components/native';

const toastTypeVariations = {
  info: css`
    background: #7051dc;
    color: #fff;
  `,
  success: css`
    background: #04d7a7;
    color: #fff;
  `,
  error: css`
    background: #c53030;
    color: #fff;
  `,
  warning: css`
    background: #ff9000;
    color: #fff;
  `,
};

export const Container = styled.View`
  ${({ type }) => toastTypeVariations[type || 'info']};

  flex-direction: row;
  align-items: center;

  padding: 15px;

  margin: 0 16px;

  border-radius: 5px;
  
  margin-top: auto;
  margin-bottom: 5px;
`;

export const Information = styled.View`
  margin-left: 15px;
`;

export const Title = styled.Text`
  color: #fff;
  font-family: 'Rubik-Regular';
  font-size: 16px;
`;

export const CloseButton = styled.TouchableOpacity`
  margin-left: auto;
`;
